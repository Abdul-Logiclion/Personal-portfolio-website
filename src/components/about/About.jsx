import React from "react";
import './about.css'
import ME from '../../Img4.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return(
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card" >
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className="about__card" >
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>20+ World Wide</small>
                        </article>
                        <article className="about__card" >
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>40+ Completed</small>
                        </article>
                    </div>
                    
                    <p>Passionate about web development and data science, I blend creative web solutions with data-driven insights. Proficient in HTML, CSS, and JavaScript, I create seamless user experiences. Using Python, I uncover trends and patterns from complex data. Committed to staying current with tech trends, I integrate innovative approaches into my work. Collaborative and adaptable, I thrive in interdisciplinary projects. Let's connect and explore new opportunities!
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>

        </section>
    )
 }
 export default About