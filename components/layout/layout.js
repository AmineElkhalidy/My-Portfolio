import Image from 'next/image'
import React, { useEffect } from 'react'


const Layout = () => {

useEffect(() => {
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show-menu')
})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
navClose.addEventListener('click', () =>{
  navMenu.classList.remove('show-menu')
})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
const navMenu = document.getElementById('nav-menu')
// When we click on each nav__link, we remove the show-menu class
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

    }, []);

    return (
        <header className='header' id='header' >
            <nav className='nav container' >
                <a href='#' className='nav__logo' >
                    <Image className='nav__logo-img' src='/assets/img/Logo.png' alt='Logo image' width={60} height={60} /> Amine Elkhalidy
                </a>

                <div className='nav__menu' id='nav-menu' >
                    <ul className='nav__list' >
                        <li className='nav__item' >
                            <a href='#home' className='nav__link' >
                                Home
                            </a>
                        </li>

                        <li className='nav__item' >
                            <a href='#projects' className='nav__link' >
                                Projects
                            </a>
                        </li>

                        <li className='nav__item' >
                            <a href='#about' className='nav__link' >
                                About
                            </a>
                        </li>

                        <li className='nav__item' >
                            <a href='#contact' className='nav__link' >
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className='nav__close' id='nav-close' >
                        <i className='bx bx-x nav__icon'></i>
                    </div>
                </div>

                <div className='nav__toggle' id='nav-toggle' >
                    <i className='bx bx-grid-alt nav__icon'></i>
                </div>
            </nav>
        </header>
    )
}

export default Layout
