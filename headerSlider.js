import Swiper, {Autoplay, Keyboard, Navigation, Pagination} from 'swiper';

function swapBackground(swiperInstance) {
    const bgUrl = swiperInstance.slides[swiperInstance.realIndex].dataset.backgroundUrl
    document.querySelector('.header').style.backgroundImage = `
        linear-gradient(180deg, rgba(28, 24, 21, 0.9) 0%, rgba(36, 31, 28, 0.79) 14.58%, rgba(35, 31, 27, 0.811768) 60.42%, #1B1714 100%),
        url("${bgUrl}")
    `
}
export function setupHeaderSlider() {
    const swiper = new Swiper('.header .swiper', {
        // configure Swiper to use modules
        modules: [Navigation, Pagination, Keyboard, Autoplay],
        direction: 'horizontal',
        loop: true,
        keyboard: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },

        // If we need pagination
        pagination: {
            el: '.header .swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.header .swiper-button-next',
            prevEl: '.header .swiper-button-prev',
        },
    });


    console.log(swiper.slides[swiper.realIndex].dataset)
    swapBackground(swiper)
    swiper.on('slideChange', () => {
        swapBackground(swiper)
    })
}
