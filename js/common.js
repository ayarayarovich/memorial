import '/scss/style.scss'
import 'swiper/swiper.css'
import 'droppy-menu/dist/droppy.min.css'
import 'animate.css'

import Droppy from "droppy-menu";



function setupNavigation() {

    const navbar = renderNavigation()

    const dropdownMenuEl = navbar.querySelector('.dropdown-menu')
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

    document.querySelector('header.header').prepend(navbar)
}


function renderNavigation() {
    const c = document.createElement('div')
    c.innerHTML = `
        <nav class="navbar">
        <div class="container">
          <div class="navbar__inner flex-column flex-md-row">
            <a class="navbar__logo mb-4 mb-lg-0" href="/">
              <img src="/logo.png" alt="Памятники на заказ">
            </a>

                <ul class="navbar__menu mb-4 mb-lg-0">
                    <li>
                        <a href="/catalog/">Каталог</a>
                    </li>
                    <li>
                        <a href="/about-us/">О нас</a>
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
                                        <li><a href="/about-us/">О компании</a></li>
                                        <li><a href="/payment/">Оплата и доставка</a></li>
                                        <li><a href="/awards/">Сертификаты и награды</a></li>
                                        <li><a href="/blog/">Статьи</a></li>
                                        <li><a href="/warranty/">Гарантии</a></li>
                                        <li><a href="/reviews/">Отзывы</a></li>
                                        <li><a href="/faq/">FAQ</a></li>
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
              <img src="/whatsapp.png" alt="">
            </a>
          </div>
        </div>
      </nav>
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
                <a href="/about-us/">О нас</a>
                <a href="/works/">Наши проекты</a>
                <a href="/blog/">Статьи</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="/payment/">Оплата и доставка Гранитных памятников</a>
                <a href="/warranty/">Гарантии на Гранитные памятники</a>
                <a href="/faq/">Вопросы и ответы о Гранитных памятниках</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="/about-us/">О компании</a>
                <a href="/awards/">Сертификаты и награды Компании «Памятники на заказ»</a>
                <a href="/reviews/">Отзывы</a>
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
