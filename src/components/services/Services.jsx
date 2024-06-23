import React, {useState} from "react";
import {motion} from "framer-motion"
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const fadeIn = (direction, delay) => {
        return {
            hidden: {
                y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
                opacity: 0,
                x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
                transition: {
                    type: 'tween', duration: 1.5, delay: delay, ease: [0.25, 0.6, 0.3, 0.8],
                },
            }, show: {
                y: 0, x: 0, opacity: 1, transition: {
                    type: 'tween', duration: 1.4, delay: delay, ease: [0.25, 0.25, 0.25, 0.75],
                },
            },
        };
    };


    return (<section className="services section" id="services">
        <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate={'show'}
            exit={'hidden'}
            className="section__title">Services
        </motion.h2>
        <motion.span variants={fadeIn("up", 0.1)}
                     initial="hidden"
                     animate={'show'}
                     exit={'hidden'}
                     className="section__subtitle">
            What I offer
        </motion.span>

        <div className="services__container container grid">
            {/*Software Development*/}
            <motion.div variants={fadeIn("up", 0.5)}
                        initial="hidden"
                        animate={'show'}
                        exit={'hidden'} className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Software <br/> Development</h3>
                </div>

                <span className="services__button" onClick={event => {
                    toggleTab(1)
                }}>
                    view more<i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? 'services__modal active' : 'services__modal'}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={event => {
                            toggleTab(0)
                        }}></i>
                        <h3 className="services__modal-title">Software Development</h3>
                        <p className="services__modal-description">
                            Services with more than 2 years of experience.
                            Providing quality work to clients and companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <div className="services__modal-info">
                                    <strong>Web Development </strong> <br/>
                                    Frontend (HTML, CSS, JavaScript, React.js, jQuery) and Backend (Node.js,
                                    Express.js,
                                    Nest.js, Spring Boot).
                                </div>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <div className="services__modal-info">
                                    <strong>Mobile App Development</strong> <br/>
                                    Flutter and React Native for cross-platform applications.
                                </div>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <div className="services__modal-info">
                                    <strong>Cloud Services</strong><br/>
                                    Deployment and management on Google Cloud Platform (GCP), Firebase and AWS.
                                </div>
                            </li>
                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <div className="services__modal-info">
                                    <strong>Desktop Application Development</strong><br/>
                                    JavaFX-based applications, integrating features like QR code processing and
                                    webcam
                                    interaction.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/*Specialized Services*/}
            <motion.div variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        animate={'show'}
                        exit={'hidden'} className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Specialized <br/> Services</h3>
                </div>
                <span className="services__button" onClick={event => {
                    toggleTab(2)
                }}>view more
                        <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? 'services__modal active' : 'services__modal'}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={event => {
                            toggleTab(0)
                        }}></i>
                        <h3 className="services__modal-title">Specialized Services</h3>
                        <p className="services__modal-description">
                            Services with more than 2 years of experience.
                            Providing quality work to clients and companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <div className="services__modal-info">
                                    <strong>UI/UX Design</strong> <br/>
                                    Creating user-friendly interfaces based on UI/UX design principles.
                                </div>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <div className="services__modal-info">
                                    <strong>Database Management</strong> <br/>
                                    Designing and managing relational databases (MySQL) and NoSQL databases
                                    (MongoDB).
                                </div>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <div className="services__modal-info">
                                    <strong>API Development and Integration</strong> <br/>
                                    Developing and integrating RESTful APIs for web and mobile applications.<br/>
                                    Implementing security measures such as JWT (JSON Web Tokens) for API
                                    authentication.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </motion.div>

            {/*Project-Based Services*/}
            <motion.div variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        animate={'show'}
                        exit={'hidden'} className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        Project-Based <br/> Services
                    </h3>
                </div>
                <span className="services__button" onClick={event => {
                    toggleTab(3)
                }}>view more
                        <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? 'services__modal active' : 'services__modal'}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={event => {
                            toggleTab(0)
                        }}></i>
                        <h3 className="services__modal-title"> Project-Based Services</h3>
                        <p className="services__modal-description">
                            Services with more than 2 years of experience.
                            Providing quality work to clients and companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <div className="services__modal-info">
                                    <strong>Custom Software Solutions</strong> <br/>
                                    Developing tailored applications such as travel planning systems, waste
                                    management platforms, and educational management systems.
                                </div>
                            </li>
                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <div className="services__modal-info">
                                    <strong>Consulting Services</strong> <br/>
                                    Offering guidance on software architecture, project planning, and technology stack
                                    selection.
                                </div>
                            </li>
                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <div className="services__modal-info">
                                    <strong>Code Reviews and Quality Assurance</strong> <br/>
                                    Conducting code reviews and implementing testing strategies for quality assurance.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </motion.div>

        </div>
    </section>);
}

export default Services;