import '/scss/style.scss'
import 'swiper/swiper.css'
import 'droppy-menu/dist/droppy.min.css'
import 'animate.css'

import Droppy from "droppy-menu";

export function setupNavigation() {

    const dropdownMenuEl = document.querySelector('.dropdown-menu')
    dropdownMenuEl.querySelector('li > ul').classList.add('animate__animated', 'animate__superfast')
    const droppy = new Droppy(dropdownMenuEl, {
        parentSelector: 'li',
        dropdownSelector: 'li > ul',
        triggerSelector: 'a',
        closeOthers: true,
        clickOutToClose: true,
        clickEscToClose: true,
        preventDefault: true,
        animationIn: 'animate__fadeIn',
        animationOut: 'animate__fadeOut',
    })

    const droppyDropEl = dropdownMenuEl.querySelector('.droppy__drop')



    let closeIfNoInteraction = null

    dropdownMenuEl.addEventListener('mouseover', () => {
        clearTimeout(closeIfNoInteraction)
        droppy.open(droppyDropEl)
    })
    dropdownMenuEl.addEventListener('mouseleave', () => {
        closeIfNoInteraction = setTimeout(() => {
            droppy.close(droppyDropEl)
        }, 1000)
    })
    droppyDropEl.addEventListener('mouseover', () => {
        clearTimeout(closeIfNoInteraction)
    })
    droppyDropEl.addEventListener('mouseleave', () => {
        clearTimeout(closeIfNoInteraction)
        droppy.close(droppyDropEl)
    })

}

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation()
})
