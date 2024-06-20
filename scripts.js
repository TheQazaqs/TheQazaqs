document.addEventListener('DOMContentLoaded', function() {
    // Toggle display for 'more-info' sections
    const moreInfoButtons = document.querySelectorAll('.more-info-btn');
    moreInfoButtons.forEach(button => {
        const moreInfo = button.nextElementSibling;
        moreInfo.style.display = 'none';

        button.addEventListener('click', function() {
            if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
                moreInfo.style.display = 'block';
                button.textContent = 'Свернуть';
            } else {
                moreInfo.style.display = 'none';
                button.textContent = 'Подробнее';
            }
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Initialize and handle gallery slides
    const galleries = document.querySelectorAll('.gallery-container');
    galleries.forEach(gallery => {
        const slides = gallery.querySelectorAll('.gallery-slide');
        const prevButton = gallery.querySelector('.prevSlide');
        const nextButton = gallery.querySelector('.nextSlide');
        let currentSlide = 0;

        function updateSlideVisibility() {
            slides.forEach((slide, index) => {
                slide.style.display = index === currentSlide ? 'block' : 'none';
            });
            prevButton.style.display = currentSlide === 0 ? 'none' : 'inline-block';
            nextButton.style.display = currentSlide === slides.length - 1 ? 'none' : 'inline-block';
        }

        nextButton.addEventListener('click', () => {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                updateSlideVisibility();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlideVisibility();
            }
        });

        updateSlideVisibility();
    });

    // Modal for gallery images
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.gallery-slide img').forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Function to initialize gallery with slideshow functionality
    function initializeGallery(gallery) {
        const slides = gallery.querySelectorAll('.gallery-slide');
        const prevButton = gallery.querySelector('.prevSlide');
        const nextButton = gallery.querySelector('.nextSlide');
        let currentSlide = 0;

        function updateSlideVisibility() {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
            prevButton.style.display = currentSlide === 0 ? 'none' : 'inline-block';
            nextButton.style.display = currentSlide === slides.length - 1 ? 'none' : 'inline-block';
        }

        nextButton.addEventListener('click', () => {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                updateSlideVisibility();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlideVisibility();
            }
        });

        updateSlideVisibility();
    }

    // Apply to all gallery containers
    const galleries = document.querySelectorAll('.gallery-container');
    galleries.forEach(gallery => {
        initializeGallery(gallery);
    });

    // Other event listener setups remain unchanged
});
