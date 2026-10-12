/*
 * CARTE D'ALBA — brasserie italienne, Chartres
 * ---------------------------------------------------------------
 * ⚠ CARTE D'EXEMPLE POUR LA MAQUETTE : la vraie carte du chef
 * Antonio Boccale n'est pas encore publiée. Plats et prix sont
 * proposés à partir de l'univers annoncé (cuisine des Pouilles,
 * brasserie italienne) et des prix pratiqués au Café Bleu.
 * À remplacer intégralement par la carte validée par Alba.
 *
 * Pour modifier un plat : changer le nom, la description ou le prix
 * puis enregistrer. Rien d'autre à toucher.
 *
 * diet    : "veg" (végétarien), "vegan", "gf" (sans gluten), "lf" (sans lactose)
 * allergens : gluten, crustaces, oeufs, poisson, arachide, soja, lait,
 *             fruits-a-coque, celeri, moutarde, sesame, sulfites, lupin, mollusques
 * img     : photo du plat (dossier assets/img), facultatif
 *
 * Mise à jour sans toucher au code : voir SITE_CONFIG.menuSheetUrl
 * dans assets/js/config.js (Google Sheets publié en CSV).
 */
window.CARTE = [
  {
    id: "aperitivo",
    title: { fr: "Aperitivo", en: "Aperitivo" },
    note: { fr: "À partager dans la cour ou au comptoir.", en: "To share in the courtyard or at the bar." },
    items: [
      { name: "Focaccia barese", desc: { fr: "Tomates cerises, olives, origan, huile d'olive des Pouilles", en: "Cherry tomatoes, olives, oregano, Apulian olive oil" }, price: 7, diet: ["veg", "vegan", "lf"], allergens: ["gluten"] },
      { name: "Taralli & olives", desc: { fr: "Petits biscuits salés au fenouil, olives de Cerignola", en: "Fennel taralli, Cerignola olives" }, price: 6, diet: ["veg", "vegan", "lf"], allergens: ["gluten", "sulfites"] },
      { name: "Burrata des Pouilles", desc: { fr: "Tomates de saison, basilic, focaccia tiède", en: "Seasonal tomatoes, basil, warm focaccia" }, price: 14, diet: ["veg"], allergens: ["lait", "gluten"] },
      { name: "Tagliere", desc: { fr: "Charcuterie italienne, pecorino, giardiniera", en: "Italian cured meats, pecorino, pickled vegetables" }, price: 22, diet: [], allergens: ["lait", "sulfites", "gluten"] },
      { name: "Arancini", desc: { fr: "Ragù, petits pois, mozzarella", en: "Ragù, peas, mozzarella" }, price: 9, diet: [], allergens: ["gluten", "lait", "oeufs", "celeri"] }
    ]
  },
  {
    id: "antipasti",
    title: { fr: "Antipasti", en: "Antipasti" },
    items: [
      { name: "Vitello tonnato", desc: { fr: "Veau rosé, sauce au thon, câpres", en: "Pink veal, tuna sauce, capers" }, price: 14, diet: ["gf", "lf"], allergens: ["poisson", "oeufs", "moutarde"] },
      { name: "Carpaccio di manzo", desc: { fr: "Roquette, parmesan 24 mois, citron", en: "Beef carpaccio, rocket, 24-month parmesan, lemon" }, price: 13, diet: ["gf"], allergens: ["lait"] },
      { name: "Parmigiana di melanzane", desc: { fr: "Aubergines, tomate, mozzarella, basilic", en: "Aubergine, tomato, mozzarella, basil" }, price: 12, diet: ["veg", "gf"], allergens: ["lait", "oeufs"] },
      { name: "Polpo e patate", desc: { fr: "Poulpe grillé, pommes de terre, olives, persil", en: "Grilled octopus, potatoes, olives, parsley" }, price: 15, diet: ["gf", "lf"], allergens: ["mollusques"] }
    ]
  },
  {
    id: "pasta",
    title: { fr: "Pasta", en: "Pasta" },
    note: { fr: "Pâtes fraîches faites maison chaque matin.", en: "Fresh pasta made in-house every morning." },
    items: [
      { name: "Orecchiette alle cime di rapa", desc: { fr: "La recette des Pouilles : brocoli-rave, anchois, ail, piment, chapelure dorée", en: "The Apulian classic: broccoli rabe, anchovy, garlic, chilli, toasted breadcrumbs" }, price: 18, diet: ["lf"], allergens: ["gluten", "poisson"] },
      { name: "Orecchiette al ragù", desc: { fr: "Ragù de bœuf mijoté, cacioricotta", en: "Slow-cooked beef ragù, cacioricotta" }, price: 19, diet: [], allergens: ["gluten", "lait", "celeri", "sulfites"] },
      { name: "Spaghetti alla carbonara", desc: { fr: "Guanciale, jaune d'œuf, pecorino romano, poivre", en: "Guanciale, egg yolk, pecorino romano, pepper" }, price: 19, diet: [], allergens: ["gluten", "oeufs", "lait"] },
      { name: "Cavatelli alle vongole", desc: { fr: "Palourdes, vin blanc, persil, citron", en: "Clams, white wine, parsley, lemon" }, price: 22, diet: ["lf"], allergens: ["gluten", "mollusques", "sulfites"] },
      { name: "Rigatoni alla norma", desc: { fr: "Aubergine frite, tomate, ricotta salata, basilic", en: "Fried aubergine, tomato, ricotta salata, basil" }, price: 17, diet: ["veg"], allergens: ["gluten", "lait"] },
      { name: "Risotto ai funghi", desc: { fr: "Champignons de saison, parmesan, thym", en: "Seasonal mushrooms, parmesan, thyme" }, price: 21, diet: ["veg", "gf"], allergens: ["lait", "sulfites", "celeri"] }
    ]
  },
  {
    id: "secondi",
    title: { fr: "Secondi", en: "Mains" },
    items: [
      { name: "Milanese di vitello", desc: { fr: "Côte de veau panée, roquette, tomates cerises, citron", en: "Breaded veal chop, rocket, cherry tomatoes, lemon" }, price: 26, diet: ["lf"], allergens: ["gluten", "oeufs"] },
      { name: "Bombette pugliesi", desc: { fr: "Petits roulés de porc au caciocavallo, grillés, pommes de terre au romarin", en: "Grilled pork rolls with caciocavallo, rosemary potatoes" }, price: 23, diet: ["gf"], allergens: ["lait"] },
      { name: "Branzino", desc: { fr: "Bar rôti, fenouil, agrumes, huile d'olive", en: "Roasted sea bass, fennel, citrus, olive oil" }, price: 25, diet: ["gf", "lf"], allergens: ["poisson"] },
      { name: "Pollo alla cacciatora", desc: { fr: "Poulet mijoté, tomate, olives, romarin, polenta crémeuse", en: "Braised chicken, tomato, olives, rosemary, creamy polenta" }, price: 21, diet: ["gf"], allergens: ["lait", "celeri", "sulfites"] }
    ]
  },
  {
    id: "dolci",
    title: { fr: "Dolci", en: "Desserts" },
    items: [
      { name: "Tiramisù d'Alba", desc: { fr: "Mascarpone, café serré, cacao", en: "Mascarpone, espresso, cocoa" }, price: 10, diet: ["veg"], allergens: ["gluten", "oeufs", "lait"], img: "tiramisu.webp" },
      { name: "Panna cotta", desc: { fr: "Coulis de fruits rouges", en: "Red berry coulis" }, price: 9, diet: ["veg", "gf"], allergens: ["lait"] },
      { name: "Cannolo siciliano", desc: { fr: "Ricotta, pistache, écorces d'orange confites", en: "Ricotta, pistachio, candied orange peel" }, price: 9, diet: ["veg"], allergens: ["gluten", "lait", "fruits-a-coque"] },
      { name: "Affogato", desc: { fr: "Glace fior di latte, espresso", en: "Fior di latte ice cream, espresso" }, price: 7, diet: ["veg", "gf"], allergens: ["lait", "oeufs"] },
      { name: "Caffè gourmand", desc: { fr: "Espresso et trois mignardises italiennes", en: "Espresso with three Italian sweets" }, price: 11, diet: ["veg"], allergens: ["gluten", "oeufs", "lait", "fruits-a-coque"] }
    ]
  }
];

/* Carte des vins (exemple) : [nom, précision, verre, 50 cl, bouteille] */
window.VINS = [
  {
    title: { fr: "Bianchi", en: "White" },
    items: [
      ["Fiano", "Salento IGP · Pouilles", 6.5, 22, 30],
      ["Vermentino", "Sardaigne", 7, 24, 33],
      ["Pinot Grigio", "Delle Venezie DOC", 6, 20, 28],
      ["Soave Classico", "Vénétie", null, null, 36],
      ["Greco di Tufo", "Campanie", null, null, 44]
    ]
  },
  {
    title: { fr: "Rossi", en: "Red" },
    items: [
      ["Primitivo", "Salento IGP · Pouilles", 6.5, 22, 30],
      ["Negroamaro", "Salento · Pouilles", 7, 24, 32],
      ["Montepulciano d'Abruzzo", "Abruzzes", 6.5, 22, 30],
      ["Chianti Classico", "Toscane", null, null, 42],
      ["Primitivo di Manduria", "Pouilles", null, null, 46],
      ["Nebbiolo d'Alba", "Piémont", null, null, 52]
    ]
  },
  {
    title: { fr: "Rosati", en: "Rosé" },
    items: [
      ["Negroamaro rosato", "Salento · Pouilles", 6.5, 22, 30],
      ["Bardolino Chiaretto", "Lac de Garde", 7, 24, 34]
    ]
  },
  {
    title: { fr: "Bollicine & spritz", en: "Sparkling & spritz" },
    items: [
      ["Prosecco", "Valdobbiadene DOCG", 7, null, 34],
      ["Lambrusco", "Émilie-Romagne", 6, null, 28],
      ["Aperol spritz", "Le classique", 10, null, null],
      ["Limoncello spritz", "Citron de Sorrente", 11, null, null],
      ["Negroni", "Gin, bitter, vermouth", 12, null, null]
    ]
  }
];
