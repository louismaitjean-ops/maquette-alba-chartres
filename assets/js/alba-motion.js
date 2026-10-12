/*
 * MOUVEMENT — Alba
 * Apparitions, manifeste qui s'écrit mot à mot au défilement, parallaxe des photos,
 * incontournables en défilement horizontal, barre de navigation qui s'efface.
 * Tout est désactivé si le visiteur a demandé « réduire les animations ».
 */
(function () {
  "use strict";

  var api = { refresh: function () {}, dishes: function () {} };
  window.JajaMotion = api; // nom attendu par main.js

  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  if (reduce || !("IntersectionObserver" in window)) {
    root.classList.remove("motion");
    $$(".hscroll").forEach(function (h) { h.classList.add("is-native"); });
    return;
  }
  root.classList.add("motion");

  /* ---------- Apparitions ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

  function watchReveals() {
    $$("[data-reveal]:not(.is-in), [data-wipe]:not(.is-in)").forEach(function (el) {
      if (!el._w) { el._w = true; io.observe(el); }
    });
  }

  /* ---------- Manifeste : découpage en mots ---------- */
  var fills = [];
  function split(el) {
    var words = [];
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var parts = n.textContent.split(/(\s+)/);
          var frag = document.createDocumentFragment();
          parts.forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
            var s = document.createElement("span");
            s.className = "w"; s.textContent = p;
            frag.appendChild(s); words.push(s);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1) {
          if (n.classList.contains("inpic")) { n.classList.add("w"); words.push(n); }
          else walk(n);
        }
      });
    })(el);
    return words;
  }
  function prepareFills() {
    fills = $$(".js-fill").map(function (el) {
      if (!el.querySelector(".w")) el._words = split(el);
      return el;
    });
  }

  /* ---------- Défilement horizontal ---------- */
  var hs = $(".hscroll");
  var hTrack = hs && $(".hscroll__track", hs);
  var hBar = hs && $(".js-hbar", hs);
  var hCount = hs && $(".js-hcount", hs);
  var hDist = 0;
  function sizeH() {
    if (!hs) return;
    var native = window.innerWidth < 700;
    hs.classList.toggle("is-native", native);
    if (native) { hs.style.height = ""; hTrack.style.transform = ""; return; }
    hDist = Math.max(0, hTrack.scrollWidth - window.innerWidth);
    hs.style.height = (hDist + window.innerHeight * 1.15) + "px";
  }

  /* ---------- Parallaxe ---------- */
  var par = $$("[data-speed]");

  /* ---------- Hero : on « traverse » le logo ---------- */
  var heroWrap = $(".hero-wrap");
  var hero = heroWrap && {
    logo: $(".hero__logo", heroWrap), meta: $(".hero__meta", heroWrap), foot: $(".hero__foot", heroWrap),
    cue: $(".hero__scroll", heroWrap), veil: $(".hero__veil", heroWrap), bg: $(".hero__bg", heroWrap),
    a: $(".hero__card--a", heroWrap), b: $(".hero__card--b", heroWrap), c: $(".hero__card--c", heroWrap)
  };
  function heroFrame(vh) {
    if (!hero) return;
    var r = heroWrap.getBoundingClientRect();
    var span = heroWrap.offsetHeight - vh;
    if (span <= 0) return;
    var p = clamp(-r.top / span, 0, 1);
    var e = p * p * (3 - 2 * p); // ease in-out
    var vw = window.innerWidth;
    hero.logo.style.transform = "scale(" + (1 + e * 5.5).toFixed(3) + ")";
    hero.logo.style.opacity = clamp(1 - (p - 0.35) / 0.45, 0, 1).toFixed(3);
    hero.meta.style.opacity = hero.foot.style.opacity = hero.cue.style.opacity = clamp(1 - p * 3, 0, 1).toFixed(3);
    hero.foot.style.transform = "translate3d(0," + (p * 120).toFixed(1) + "px,0)";
    if (hero.a) hero.a.style.transform = "translate3d(" + (-e * vw * 0.55).toFixed(1) + "px," + (-e * vh * 0.25).toFixed(1) + "px,0) rotate(" + (-e * 6).toFixed(2) + "deg) scale(" + (1 + e * 0.9).toFixed(3) + ")";
    if (hero.b) hero.b.style.transform = "translate3d(" + (e * vw * 0.5).toFixed(1) + "px," + (-e * vh * 0.35).toFixed(1) + "px,0) rotate(" + (e * 6).toFixed(2) + "deg) scale(" + (1 + e * 0.8).toFixed(3) + ")";
    if (hero.c) hero.c.style.transform = "translate3d(" + (e * vw * 0.3).toFixed(1) + "px," + (e * vh * 0.6).toFixed(1) + "px,0) rotate(" + (-e * 12).toFixed(2) + "deg) scale(" + (1 + e * 0.7).toFixed(3) + ")";
    if (hero.bg) hero.bg.style.transform = "scale(" + (1 + e * 0.35).toFixed(3) + ")";
    hero.veil.style.opacity = clamp((p - 0.82) / 0.18, 0, 1).toFixed(3);
  }

  /* ---------- Boucle ---------- */
  var nav = $("#nav");
  var lastY = window.scrollY;
  var ticking = false;
  function frame() {
    ticking = false;
    var vh = window.innerHeight, y = window.scrollY;
    heroFrame(vh);

    par.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      var off = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.speed);
      el.style.transform = "translate3d(0," + off.toFixed(1) + "px,0)";
    });

    fills.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.25), 0, 1);
      var w = el._words || $$(".w", el), n = Math.round(p * w.length);
      for (var i = 0; i < w.length; i++) w[i].classList.toggle("on", i < n);
    });

    if (hs && !hs.classList.contains("is-native")) {
      var r2 = hs.getBoundingClientRect();
      var span = hs.offsetHeight - vh;
      var p2 = span > 0 ? clamp(-r2.top / span, 0, 1) : 0;
      hTrack.style.transform = "translate3d(" + (-p2 * hDist).toFixed(1) + "px,0,0)";
      if (hBar) hBar.style.setProperty("--p", p2.toFixed(4));
      if (hCount) hCount.textContent = "0" + Math.min(5, 1 + Math.floor(p2 * 5.2));
    }

    if (nav && !nav.classList.contains("menu-open")) {
      nav.classList.toggle("is-hidden", y > lastY + 4 && y > vh * 0.8);
      if (y < lastY - 4) nav.classList.remove("is-hidden");
    }
    document.body.classList.toggle("at-top", y < vh * 0.5);
    lastY = y;
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Défilement fluide (Lenis) ---------- */
  if (window.Lenis) {
    var lenis = new window.Lenis({ lerp: 0.085, wheelMultiplier: 0.9, anchors: { offset: -60 } });
    lenis.on("scroll", onScroll);
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(performance.now());
    window.albaLenis = lenis;
  }
  window.addEventListener("resize", function () { sizeH(); onScroll(); });
  window.addEventListener("load", function () { sizeH(); onScroll(); });

  api.refresh = function () { prepareFills(); watchReveals(); sizeH(); frame(); };
  api.dishes = function () {};

  document.addEventListener("DOMContentLoaded", function () { watchReveals(); sizeH(); onScroll(); });
})();
