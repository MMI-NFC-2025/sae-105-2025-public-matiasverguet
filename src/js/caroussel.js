// Carousel pour la page artiste
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselTrack = document.querySelector('.artist-gallery');
const carouselImages = document.querySelectorAll('.gallery-image');

if (carouselTrack && carouselImages.length > 0) {
    let currentIndex = 0;
    const totalImages = carouselImages.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });
    }
}


