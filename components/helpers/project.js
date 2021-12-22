import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = ({project}) => {
    return (
                        <article className="project__card grid">
                            <Image src={project.image} alt={project.title} width={300} height={150} className="project__img" />

                            <div className="project__data">
                                <h3 className="project__title">{project.title}</h3>
                                <p className="project__description"> {project.description} </p>

                                <div className="project__links">
                                    <Link href={project.linkToCode} >
                                        <a target='_blank' className='project__link-button btn-one' >
                                            Source Code
                                        </a>
                                    </Link>

                                    <Link href={project.linkToProject} >
                                        <a target='_blank' className='project__link-button btn-two' >
                                            Live Preview
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </article>
    )
}

export default Project
