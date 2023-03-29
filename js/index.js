import Swiper, {Autoplay, Keyboard, Navigation, Pagination} from 'swiper';
import axios from "axios"
import qs from 'qs'

function swapBackground(swiperInstance) {
    const bgUrl = swiperInstance.slides[swiperInstance.realIndex].dataset.backgroundUrl
    document.querySelector('.header').style.backgroundImage = `
        linear-gradient(180deg, rgba(28, 24, 21, 0.9) 0%, rgba(36, 31, 28, 0.79) 14.58%, rgba(35, 31, 27, 0.811768) 60.42%, #1B1714 100%),
        url("${bgUrl}")
    `
}

function setupHeaderSlider() {
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

    swapBackground(swiper)
    swiper.on('slideChange', () => {
        swapBackground(swiper)
    })
}

function setupAboutUsSlider() {
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

function setupForm() {
    const form = document.querySelector('section.form form')
    form.addEventListener('submit', (e) => {

        const postUrl = e.target.getAttribute('action')
        const data = new FormData(e.target)
        const values = Object.fromEntries(data.entries())

        const submitButton = document.querySelector('section.form form .action-button')
        const save = {
            style: {
                backgroundColor: submitButton.style.backgroundColor,
            },
            value: submitButton.value
        }
        axios.post(postUrl, qs.stringify(values))
            .then(() => {

                    submitButton.style.backgroundColor = 'greenyellow'
                    submitButton.value = 'Успешно!'
                }
            )
            .catch(() => {
                submitButton.value = 'Не удалось отправить'
            })


        setTimeout(() => {
            Object.assign(submitButton, save)
        }, 1000)

        e.preventDefault()
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setupForm()
    setupHeaderSlider()
    setupAboutUsSlider()
})
