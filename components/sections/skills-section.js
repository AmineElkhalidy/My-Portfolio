import React from 'react'

const SkillsSection = () => {
    return (
        <section className='skills section container' >
            <h2 className='section__title skills__section-title' >Skills</h2>
            <p className='skills__description' >Things that I am good at :</p>

            <div className='skills__container grid' >
                <div class="skill__info">
                    <h3 class="skill__name"> <i class='bx bx-code-alt skill__icon'></i> Front-End :</h3>

                    <ul class="skill__list">
                        <li class="skill__item">
                            HTML
                        </li>

                        <li class="skill__item">
                            CSS
                        </li>

                        <li class="skill__item">
                            SASS
                        </li>

                        <li class="skill__item">
                            JavaScript
                        </li>

                        <li class="skill__item">
                            ReactJs
                        </li>

                        <li class="skill__item">
                            NextJs
                        </li>
                    </ul>
                </div>

                <div class="skill__info">
                    <h3 class="skill__name"><i class='bx bx-server skill__icon' ></i> Back-End :</h3>
    
                    <ul class="skill__list">
                        <li class="skill__item">
                            Python
                        </li>
    
                        <li class="skill__item">
                            Java
                        </li>
    
                        <li class="skill__item">
                            C
                        </li>
    
                        <li class="skill__item">
                            Node Js
                        </li>
    
                        <li class="skill__item">
                            Golang
                        </li>
                    </ul>
                </div>

                <div class="skill__info">
                    <h3 class="skill__name"><i class='bx bx-data skill__icon'></i> Database :</h3>
    
                    <ul class="skill__list">
                        <li class="skill__item">
                            MySql
                        </li>
    
                        <li class="skill__item">
                            MongoDB
                        </li>

                        <li class="skill__item">
                            NoSql
                        </li>
                    </ul>
                </div>

                <div class="skill__info">
                    <h3 class="skill__name"><i class='bx bx-book skill__icon'></i> Graphic Design :</h3>
    
                    <ul class="skill__list">
                        <li class="skill__item">
                            Adobe XD
                        </li>
    
                        <li class="skill__item">
                            A.Photoshop
                        </li>

                        <li class="skill__item">
                            A.Illustrator
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default SkillsSection
