import Swiper, {Autoplay, Navigation} from 'swiper';

export function setupAboutUsSlider() {
    const swiper = new Swiper('.about-us .swiper', {
        // configure Swiper to use modules
        modules: [Navigation, Autoplay],
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.about-us .swiper-button-next',
            prevEl: '.about-us .swiper-button-prev',
        },
    });
}
