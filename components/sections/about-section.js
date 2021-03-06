import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <section className='about section container' id='about' >
            <h2 className='section__title about__title' >About Me</h2>
            <p className='about__title-description' >A few words about me :</p>

            <div className='about__container grid'>
                <div className='about__img'>
                <Image src='/assets/img/avatar.svg' width={200} height={218} alt='my personal avatar'  />
                </div>

                <div className='about__data' >
                    <p className='about__description' >
                    Hello Dear, I am Amine Elkhalidy, a front end developer and designer, from early age i found that my passion is all around Technology, that why since the last years, i tried to work hard on myself to develop my skills in programming industry in order to deliver quality work.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
