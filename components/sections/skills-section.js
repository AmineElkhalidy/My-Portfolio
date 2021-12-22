import React from 'react'

const SkillsSection = () => {
    return (
        <section className='skills section container' >
            <h2 className='section__title skills__section-title' >Skills</h2>
            <p className='skills__description' >Things that I am good at :</p>

            <div className='skills__container grid' >
                <div className="skill__info">
                    <h3 className="skill__name"> <i className='bx bx-code-alt skill__icon'></i> Front-End :</h3>

                    <ul className="skill__list">
                        <li className="skill__item">
                            HTML
                        </li>

                        <li className="skill__item">
                            CSS
                        </li>

                        <li className="skill__item">
                            SASS
                        </li>

                        <li className="skill__item">
                            JavaScript
                        </li>

                        <li className="skill__item">
                            ReactJs
                        </li>

                        <li className="skill__item">
                            NextJs
                        </li>
                    </ul>
                </div>

                <div className="skill__info">
                    <h3 className="skill__name"><i className='bx bx-server skill__icon' ></i> Back-End :</h3>
    
                    <ul className="skill__list">
                        <li className="skill__item">
                            Python
                        </li>
    
                        <li className="skill__item">
                            Java
                        </li>
    
                        <li className="skill__item">
                            C
                        </li>
    
                        <li className="skill__item">
                            Node Js
                        </li>
    
                        <li className="skill__item">
                            Golang
                        </li>
                    </ul>
                </div>

                <div className="skill__info">
                    <h3 className="skill__name"><i className='bx bx-data skill__icon'></i> Database :</h3>
    
                    <ul className="skill__list">
                        <li className="skill__item">
                            MySql
                        </li>
    
                        <li className="skill__item">
                            MongoDB
                        </li>

                        <li className="skill__item">
                            NoSql
                        </li>
                    </ul>
                </div>

                <div className="skill__info">
                    <h3 className="skill__name"><i className='bx bx-book skill__icon'></i> Graphic Design :</h3>
                    <ul className="skill__list">
                        <li className="skill__item">
                            Adobe XD
                        </li>

                        <li className="skill__item">
                            A.Photoshop
                        </li>

                        <li className="skill__item">
                            A.Illustrator
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default SkillsSection
