document.addEventListener('DOMContentLoaded', function() {
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

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.gallery-slide');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    let currentSlide = 0;

    // Функция для обновления видимости слайдов и стрелок
    function updateSlideVisibility() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'inline-block' : 'none';
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

    updateSlideVisibility(); // Initialize slide visibility

    // Скроем стрелки, если они находятся вне галереи
    const gallerySection = document.getElementById('gallery');
    function checkArrowVisibility() {
        const galleryRect = gallerySection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (galleryRect.top < windowHeight && galleryRect.bottom >= 0) {
            prevButton.style.display = currentSlide === 0 ? 'none' : 'inline-block';
            nextButton.style.display = currentSlide === slides.length - 1 ? 'none' : 'inline-block';
        } else {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        }
    }

    window.addEventListener('scroll', checkArrowVisibility);
    window.addEventListener('resize', checkArrowVisibility);
    checkArrowVisibility(); // Initial check
});
document.addEventListener('DOMContentLoaded', function() {
    // Получаем модальное окно
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementsByClassName('close')[0];

    // Получаем все изображения и добавляем обработчик клика
    const images = document.querySelectorAll('.gallery-slide img');
    images.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.src;
            captionText.innerHTML = this.nextElementSibling.textContent;
        });
    });

    // Закрываем модальное окно при клике на крестик
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закрываем модальное окно при клике вне изображения
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.gallery-slide');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    let currentSlide = 0;

    // Функция для обновления видимости слайдов и стрелок
    function updateSlideVisibility() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'block' : 'none'; // Отображаем только текущий слайд
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

    updateSlideVisibility(); // Initialize slide visibility

    // Скроем стрелки, если они находятся вне галереи
    const gallerySection = document.getElementById('gallery');
    function checkArrowVisibility() {
        const galleryRect = gallerySection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (galleryRect.top < windowHeight && galleryRect.bottom >= 0) {
            prevButton.style.display = currentSlide === 0 ? 'none' : 'inline-block';
            nextButton.style.display = currentSlide === slides.length - 1 ? 'none' : 'inline-block';
        } else {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        }
    }

    window.addEventListener('scroll', checkArrowVisibility);
    window.addEventListener('resize', checkArrowVisibility);
    checkArrowVisibility(); // Initial check
});
