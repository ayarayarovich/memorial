import '/scss/style.scss'
import 'swiper/swiper.css'
import 'droppy-menu/dist/droppy.min.css'
import 'animate.css'

import Droppy from "droppy-menu";



function setupNavigation() {

    const navbarWrapper = renderNavigation()

    const hamburger = navbarWrapper.querySelector('.sidebar_toggler')
    const navbar = navbarWrapper.querySelector('.navbar')
    const navbarInner = navbar.querySelector('.navbar__inner')

    navbarInner.addEventListener('click', (e) => {
        // intercept click event so side menu won't close if user clicked on dropdown
        e.stopPropagation()
    })

    const showNavbar = () => {
        document.body.style.height = '100dvh'
        document.body.style.overflow = 'hidden'
        navbar.classList.add('navbar--shown')
    }

    const hideNavbar = () => {
        document.body.style.height = ''
        document.body.style.overflow = ''
        navbar.classList.remove('navbar--shown')
    }

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation()

        if (navbar.classList.contains('navbar--shown'))
            hideNavbar()
        else
            showNavbar()

    })
    navbarWrapper.addEventListener('click', (e) => {
        hideNavbar()
    })

    const dropdownMenuEl = navbarWrapper.querySelector('.dropdown-menu')
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
    dropdownMenuEl.addEventListener('focusout', () => {
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
    droppyDropEl.addEventListener('focusout', () => {
        clearTimeout(closeIfNoInteraction)
        droppy.close(droppyDropEl)
    })


    document.querySelector('header.header').prepend(navbarWrapper)
}


function renderNavigation() {
    const c = document.createElement('div')
    c.innerHTML = `
        <div class="navbar-wrapper">
        <div class="mobile-navbar">
                <a class="navbar__logo" href="/">
                  <img src="/logo.png" alt="Памятники на заказ">
                </a>
            <div class="sidebar_toggler">
                <span></span>
                <span></span>
                <span></span>
             </div>
        </div>
        <nav class="navbar">
        <div class="container h-100">
          <div class="navbar__inner flex-column h-100 flex-lg-row justify-content-lg-between">
                <a class="navbar__logo mb-4 mb-lg-0" href="/">
                  <img src="/logo.png" alt="Памятники на заказ">
                </a>

                <ul class="navbar__menu mb-4 mb-lg-0 flex-column flex-grow-1 flex-lg-grow-0 flex-lg-row">
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/catalog/">Каталог</a>
                    </li>
                    <li>
                        <a href="/works/">Работы</a>
                    </li>
                    <li>
                        <nav class="dropdown-menu"> <!-- The Droppy's element -->
                            <ul class="menu">
                                <li> <!-- The parent selector "li" -->
                                    <a href="#">Клиенту <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                        </svg>
                                    </i>
                                    </a> <!-- The trigger selector "a" -->
                                    <ul class="menu"> <!-- The drop-down selector "li > ul" -->
                                        <li><a href="/payment/">Оплата и доставка</a></li>
                                        <li><a href="/awards/" style="display: none">Сертификаты и награды</a></li>
                                        <li><a href="/warranty/">Гарантии</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li>
                        <a href="/contacts/">Контакты</a>
                    </li>
                </ul>

            <a class="navbar__whatsapp mb-4 mb-lg-0" href="https://wa.me/+79265453632">
              <img src="/whatsapp.svg" style="height: 2.5em" alt="">
            </a>
          </div>
        </div>
      </nav>
</div>
      
    `

    return c.firstElementChild
}



function renderFooter() {
    const c = document.createElement('div')
    c.innerHTML = `
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg col-md footer__column">
                <a class="footer__logo" href="/">
                  <img src="/logo.png" alt="Памятники на заказ">
                </a>
                <a href="tel:+79661744333">
                  +7 (966) 174-43-33
                </a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="#">Памятники</a>
                <a href="#">Мемориальные комплексы</a>
                <a href="#">Эксклюзивные работы</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="/works/">Наши проекты</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="/payment/">Оплата и доставка Гранитных памятников</a>
                <a href="/warranty/">Гарантии на Гранитные памятники</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="/awards/" style="display: none">Сертификаты и награды Компании «Памятники на заказ»</a>
                <a href="/contacts/">Контакты компании «Памятники на заказ»</a>
              </div>
    
            </div>
          </div>
        </footer>
    `
    return c.firstElementChild
}

function setupFooter() {
    document.querySelector('body').append(renderFooter())
}


document.addEventListener('DOMContentLoaded', () => {
    setupNavigation()
    setupFooter()
})
