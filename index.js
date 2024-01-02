//SlideShow.
let slideIndex = 1;
showSlides(slideIndex);

// Controles de próxima/anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Controles de imagem em miniatura
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Função para avançar automaticamente os slides
function autoSlide() {
    plusSlides(1);
    setTimeout(autoSlide, 5000); // Chama a função novamente após 3 segundos
}

// Inicia o avanço automático
autoSlide();