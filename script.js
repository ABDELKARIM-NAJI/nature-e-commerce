// script.js

// Fonction pour acheter un produit via WhatsApp
function acheterProduit(nomProduit) {
    const phoneNumber = '0660023478';
    const message = `Bonjour, je suis intéressé par le produit : ${nomProduit}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Fonction pour basculer le menu hamburger
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Ajouter des événements aux boutons d'achat
document.addEventListener('DOMContentLoaded', () => {
    const boutonsAcheter = document.querySelectorAll('.acheter-btn');
    boutonsAcheter.forEach((button) => {
        button.addEventListener('click', () => {
            const produitNom = button.dataset.produit;
            acheterProduit(produitNom);
        });
    });

    // Ajouter événement au bouton hamburger
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', toggleMenu);
});
