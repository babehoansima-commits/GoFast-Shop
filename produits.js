// ============================================
// PRODUITS GOFAST - VERSION OPTIMISÉE
// ============================================

const produitsGoFast = [
    {
        id: 1,
        nom: "Chaussure pour fille",
        prix: "7",
        prixAffichage: "7.00 $",
        categorie: "chaussures",
        populaire: true,
        image: "produit1.jpg",
        description: "Toutes tailles disponibles"
    },
    {
        id: 2,
        nom: "Obtenez le prix exact de cet article après commande",
        prix: "00.00",
        prixAffichage: "Prix sur demande",
        categorie: "autres",
        populaire: true,
        image: "produit2.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 3,
        nom: "Sac le plus vendu",
        prix: "4.88",
        prixAffichage: "4.88 $",
        categorie: "sacs",
        populaire: true,
        image: "produit3.jpg",
        description: "Modèle populaire"
    },
    {
        id: 4,
        nom: "Table pour salle à manger (1.5m) + chaises",
        prix: "448.2",
        prixAffichage: "448.20 $",
        categorie: "autres",
        populaire: true,
        image: "produit4.jpg",
        description: "Table 1.5m + 6 chaises"
    },
    {
        id: 5,
        nom: "Sac pour filles tendance",
        prix: "3.5",
        prixAffichage: "3.50 $",
        categorie: "sacs",
        populaire: true,
        image: "produit5.jpg",
        description: "100 pièces minimum"
    },
    {
        id: 6,
        nom: "Faux cils professionnels",
        prix: "3.36",
        prixAffichage: "3.36 $",
        categorie: "cosmetiques",
        populaire: true,
        image: "produit6.jpg",
        description: "10 paires minimum"
    },
    {
        id: 7,
        nom: "Obtenez le prix exact de cet article après commande",
        prix: "00.00",
        prixAffichage: "Prix sur demande",
        categorie: "habits",
        populaire: true,
        image: "produit7.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 8,
        nom: "Machine à glace",
        prix: "654",
        prixAffichage: "654.00 $",
        categorie: "electronique",
        populaire: true,
        image: "produit8.jpg",
        description: "Haute capacité"
    },
    {
        id: 9,
        nom: "Bottes pour femmes élégantes",
        prix: "27",
        prixAffichage: "27.00 $",
        categorie: "chaussures",
        populaire: false,
        image: "produit9.jpg",
        description: "Minimum 5 paires"
    },
    {
        id: 10,
        nom: "Robe en jeans",
        prix: "9.1",
        prixAffichage: "9.10 $",
        categorie: "habits",
        populaire: false,
        image: "produit10.jpg",
        description: "Taille unique"
    },
    {
        id: 11,
        nom: "Sac cute moderne",
        prix: "2.8",
        prixAffichage: "2.80 $",
        categorie: "sacs",
        populaire: false,
        image: "produit11.jpg",
        description: "100 pièces minimum"
    },
    {
        id: 12,
        nom: "Notre collection de chemises",
        prix: "13.64",
        prixAffichage: "13.64 $",
        categorie: "habits",
        populaire: false,
        image: "produit12.jpg",
        description: "Collection variée"
    },
    {
        id: 13,
        nom: "Obtenez le prix exact de cet article après commande",
        prix: "00.00",
        prixAffichage: "Prix sur demande",
        categorie: "electronique",
        populaire: false,
        image: "produit13.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 14,
        nom: "Sac élégante",
        prix: "3.8",
        prixAffichage: "3.80 $",
        categorie: "sacs",
        populaire: false,
        image: "produit14.jpg",
        description: "100 pièces minimum"
    },
    {
        id: 15,
        nom: "Sac tendance",
        prix: "3.55",
        prixAffichage: "3.55 $",
        categorie: "sacs",
        populaire: false,
        image: "produit15.jpg",
        description: "100 pièces minimum"
    },
    {
        id: 16,
        nom: "Sac classique",
        prix: "3.54",
        prixAffichage: "3.54 $",
        categorie: "sacs",
        populaire: false,
        image: "produit16.jpg",
        description: "100 pièces minimum"
    },
    {
        id: 17,
        nom: "Sac élégant",
        prix: "3.8",
        prixAffichage: "3.80 $",
        categorie: "sacs",
        populaire: false,
        image: "produit17.jpg",
        description: "100 pièces minimum"
    },
    {
        id: 18,
        nom: "Sac à main sur mesure",
        prix: "00",
        prixAffichage: "Prix sur demande",
        categorie: "sacs",
        populaire: false,
        image: "produit18.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 19,
        nom: "Sac design",
        prix: "00",
        prixAffichage: "Prix sur demande",
        categorie: "sacs",
        populaire: false,
        image: "produit19.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 20,
        nom: "Sac Zara très tendance",
        prix: "5.1",
        prixAffichage: "5.10 $",
        categorie: "sacs",
        populaire: false,
        image: "produit20.jpg",
        description: "50 pièces minimum"
    },
    {
        id: 21,
        nom: "Obtenez le prix exact de cet article après commande",
        prix: "00.00",
        prixAffichage: "Prix sur demande",
        categorie: "chaussures",
        populaire: false,
        image: "produit21.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 22,
        nom: "Obtenez le prix exact de cet article après commande",
        prix: "00.00",
        prixAffichage: "Prix sur demande",
        categorie: "chaussures",
        populaire: false,
        image: "produit22.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 23,
        nom: "Obtenez le prix exact de cet article après commande",
        prix: "00.00",
        prixAffichage: "Prix sur demande",
        categorie: "chaussures",
        populaire: false,
        image: "produit23.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 24,
        nom: "Mapapa pour filles",
        prix: "4.88",
        prixAffichage: "4.88 $",
        categorie: "chaussures",
        populaire: false,
        image: "produit24.jpg",
        description: "100 pièces minimum"
    },
    {
        id: 25,
        nom: "Obtenez le prix exact de cet article après commande",
        prix: "00.00",
        prixAffichage: "Prix sur demande",
        categorie: "chaussures",
        populaire: false,
        image: "produit25.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 26,
        nom: "Mapapa tendance",
        prix: "6.5",
        prixAffichage: "6.50 $",
        categorie: "chaussures",
        populaire: false,
        image: "produit26.jpg",
        description: "20 pièces minimum"
    },
    {
        id: 27,
        nom: "Machine à glace professionnelle",
        prix: "910",
        prixAffichage: "910.00 $",
        categorie: "electronique",
        populaire: false,
        image: "produit27.jpg",
        description: "Haute performance"
    },
    {
        id: 28,
        nom: "Sac minimaliste",
        prix: "2.98",
        prixAffichage: "2.98 $",
        categorie: "sacs",
        populaire: false,
        image: "produit28.jpg",
        description: "100 pièces minimum"
    },
    {
        id: 29,
        nom: "Réfrigérateur",
        prix: "248.56",
        prixAffichage: "248.56 $",
        categorie: "electronique",
        populaire: false,
        image: "produit29.jpg",
        description: "Économique"
    },
    {
        id: 30,
        nom: "Étagère moderne",
        prix: "286.1",
        prixAffichage: "286.10 $",
        categorie: "autres",
        populaire: false,
        image: "produit30.jpg",
        description: "Design contemporain"
    },
    {
        id: 31,
        nom: "Obtenez le prix exact de cet article après commande",
        prix: "00.00",
        prixAffichage: "Prix sur demande",
        categorie: "habits",
        populaire: false,
        image: "produit31.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 32,
        nom: "Obtenez le prix exact de cet article après commande",
        prix: "00.00",
        prixAffichage: "Prix sur demande",
        categorie: "habits",
        populaire: false,
        image: "produit32.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 33,
        nom: "Obtenez le prix exact de cet article après commande",
        prix: "00.00",
        prixAffichage: "Prix sur demande",
        categorie: "habits",
        populaire: false,
        image: "produit33.jpg",
        description: "Contactez-nous pour le prix"
    },
    {
        id: 34,
        nom: "Bottes élégantes",
        prix: "27",
        prixAffichage: "27.00 $",
        categorie: "chaussures",
        populaire: false,
        image: "produit34.jpg",
        description: "5 paires minimum"
    },
    {
        id: 35,
        nom: "Visseuse professionnelle",
        prix: "90",
        prixAffichage: "90.00 $",
        categorie: "electronique",
        populaire: false,
        image: "produit35.jpg",
        description: "Haute puissance"
    }
];

// Catégories pour navigation
const categoriesGoFast = [
    { id: "habits", nom: "Habits", icon: "👕" },
    { id: "chaussures", nom: "Chaussures", icon: "👟" },
    { id: "sacs", nom: "Sacs", icon: "👜" },
    { id: "electronique", nom: "Électronique", icon: "💻" },
    { id: "cosmetiques", nom: "Cosmétiques", icon: "💄" },
    { id: "autres", nom: "Autres", icon: "📦" }
];