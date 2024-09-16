// script.js
let slideIndex = 0;
let slides = document.querySelectorAll('.slides');

function showSlides() {
    // Masquer toutes les images
    slides.forEach(slide => slide.classList.remove('active'));

    // Passer à l'image suivante
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Afficher l'image active
    slides[slideIndex - 1].classList.add('active');

    // Répéter toutes les 3 secondes
    setTimeout(showSlides, 4500);
}

// Lancer le diaporama automatiquement
showSlides();
