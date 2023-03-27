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

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('section.form form').addEventListener('submit', (e) => {
        e.preventDefault()

        const submitButton = document.querySelector('section.form form .action-button')

        const save = {
            style: {
                backgroundColor: submitButton.style.backgroundColor,
            },
            value: submitButton.value
        }
        submitButton.style.backgroundColor = 'greenyellow'
        submitButton.value = 'Успешно!'

        setTimeout(() => {
            Object.assign(submitButton, save)
        }, 1000)
    })

    setupHeaderSlider()
    setupAboutUsSlider()
})
