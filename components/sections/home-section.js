import Link from 'next/link'
import React from 'react'


const HomeSection = () => {

    return (
        <section className='home' id='home' >
            
            <div className='home__container background container grid' >
                    <div className='home__data' >
                        <h3 className='home__title' >Amine Elkhalidy</h3>
                        <p className='home__description' >Front-End Developer <br />and Designer</p>
                        <Link href='#projects' >
                            <a className='button home__button' >
                                View Projects<i className='bx bx-show home__icon'></i>
                            </a>
                        </Link>
                    </div>
                    <div className="cube"></div>
                        <div className="cube"></div>
                        <div className="cube"></div>
                        <div className="cube"></div>
                    <div className="cube"></div>
            </div>
            
        </section>
    )
}

export default HomeSection
