import React, { useEffect } from 'react'
import fs from 'fs/promises'
import path from 'path'
import Layout from '../components/layout/layout'
import AboutSection from '../components/sections/about-section'
import ContactSection from '../components/sections/contact-section'
import HomeSection from '../components/sections/home-section'
import ProjectsSection from '../components/sections/projects-section'
import SkillsSection from '../components/sections/skills-section'

const Home = (props) => {

    useEffect(() => {
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

  
    }, []);
    return (
        <>
            <Layout />

            <main className='main' >
                <HomeSection />
                <ProjectsSection projects={props.projects} />
                <AboutSection />
                <SkillsSection />
                <ContactSection />
            </main>
            
            <a href="#" className="scrollup" id="scroll-up">
                <i className='bx bx-up-arrow-alt scrollup__icon'></i>
            </a>
        </>
    )
}

export async function getStaticProps()
{
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = await fs.readFile(filePath);

    const data = JSON.parse(jsonData);

    return {
        props: {
            projects: data
        }
    }
}

export default Home
