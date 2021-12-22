import React from 'react'

const ContactSection = () => {
    return (
        <section className='contact section container' id='contact' >
            <h2 className='section__title contact__section-title' >Contact Me</h2>

            <div className='contact__container grid' >
                <div className='contact__data' >
                    <p className='contact__title' >
                        Get in touch with me using <br />
                        The following resources : 
                    </p>

                    <div className='contact__info' >
                        <span className="contact__info-mean">
                            <i className='bx bx-phone contact__icon'></i> +21206-11-15-43-07
                        </span>

                        <span className="contact__info-mean">
                            <i className='bx bx-mail-send contact__icon'></i> elkhalidyamine.a@gmail.com
                        </span>
                    </div>

                    <div className='contact__info' >
                        <h4 className="contact__social-title" >
                            Social Accounts :
                        </h4>

                        <ul className="contact__social-links">
                            <li>
                                <a href="https://www.facebook.com/amine.elkhalidy.73/" target="_blank" rel='noreferrer' className="contact__social-link">
                                    <i className='bx bxl-facebook contact__icon' ></i> Facebook
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/AmineElkhalidy?tab=repositories" target="_blank" rel='noreferrer' className="contact__social-link">
                                    <i className='bx bxl-github contact__icon' ></i> Github
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/amine-elkhalidy-1a2a15209/" target="_blank" rel='noreferrer' className="contact__social-link">
                                    <i className='bx bxl-linkedin contact__icon'></i> Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form action="" className="message__form">
                    <h3 className="message__title">
                        Send A Message
                    </h3>
                    <input type="email" placeholder="Write your email" className="message__input" />
                    <textarea placeholder="Write a message" className="message__textarea" rows="5"></textarea>
                    <a href="#" className="button message__button">Send Message<i className='bx bx-send message__icon' ></i></a>
                </form>
            </div>
        </section>
    )
}

export default ContactSection
