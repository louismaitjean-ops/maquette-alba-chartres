/*
 * RÉGLAGES DU SITE — Alba, brasserie italienne (Chartres)
 */
window.SITE_CONFIG = {
  // Réservation en ligne : le groupe Bleu Collection utilise Zenchef au Café Bleu.
  // Indiquer ici l'identifiant Zenchef d'Alba dès qu'il existe. Tant qu'il est vide,
  // les boutons « Réserver » mènent au bloc « Nous trouver ».
  zenchefId: "",

  // Avis Google : à brancher après l'ouverture (fiche Google à créer / revendiquer).
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Alba+26+place+Jean-Moulin+28000+Chartres",

  // Statistiques de visite sans cookie (Plausible). Ex. "alba-chartres.fr".
  plausibleDomain: "",

  // Carte modifiable sans agence : publier un Google Sheets en CSV et coller le lien ici.
  // Colonnes : categorie, nom, description, description_en, prix, regimes, allergenes, photo
  menuSheetUrl: "",

  // En attendant les avis Google : quelques réactions publiées sous les posts
  // Instagram d'Alba (texte d'origine, auteurs anonymisés). À remplacer à l'ouverture.
  reviews: [
    { author: "Sur Instagram", initial: "♥", source: "Instagram", when: { fr: "septembre 2026", en: "September 2026" }, text: "Un lieu rempli d'histoires… J'admire." },
    { author: "Sur Instagram", initial: "♥", source: "Instagram", when: { fr: "septembre 2026", en: "September 2026" }, text: "Encore un lieu élégant et délicieux en perspective. Bravo et merci !" },
    { author: "Sur Instagram", initial: "♥", source: "Instagram", when: { fr: "août 2026", en: "August 2026" }, text: "Quel beau projet. Nul doute qu'il sera à la hauteur de vos ambitions. Hâte de découvrir." },
    { author: "Sur Instagram", initial: "♥", source: "Instagram", when: { fr: "août 2026", en: "August 2026" }, text: "Magnifique hauteur sous plafond !" },
    { author: "Sur Instagram", initial: "♥", source: "Instagram", when: { fr: "avril 2026", en: "April 2026" }, text: "Hâte de retourner déjeuner ou dîner dans cette cour intérieure." }
  ]
};
