// Instantiate `CircleType` with an HTML element.
const circleType = new CircleType(document.getElementById('hero_header'));

// Set the text radius and direction. Note: setter methods are chainable.
circleType.radius(300);


//GLightbox for collection display
const glightbox = GLightbox({
    selector: '.glightbox'
});

// Swiper for collection preview
new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

/**
 * Init swiper slider with 3 slides at once in desktop view
 */
new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 40
        },

        1200: {
            slidesPerView: 3,
        }
    }
});