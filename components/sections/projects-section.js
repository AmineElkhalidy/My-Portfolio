import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Navigation]);
import Project from '../helpers/project'

const ProjectsSection = ({projects}) => {
    return (
        <section className='projects section container' id='projects'>
            <h2 className='section__title projects__title'>Projects</h2>
            <p className='projects__description' >The projects that I have developed.</p>

            <div className='projects__container grid' >
                <Swiper spaceBetween={50} navigation={true} className='swiper' >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id} >
                            <Project key={project.id} project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default ProjectsSection
