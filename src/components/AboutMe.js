
import React from 'react'
import './aboutme.scss'
import img1 from '../img/test1.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutMe = () => {

    useEffect(() => {
        Aos.init({
            duration: 1800,
            once: true,
            easing: "ease"
        })
    }, [])

    return (
        <div className='about-me' data-aos="fade-in">
            <div className="about-header">
                <h1>About Me</h1>
                <div className="hl"></div>
            </div>

            <div className="details">
                <div className="text-div">
                    <p>Hi there, my name is <span>Artun</span>. I'm a third year student studying <span>Computer Science</span> at Dalhousie University.</p>
                    <p>I enjoy building tech-based solutions to projects I have a passion for. Although I primarily focus on the front-end, I dabble in every aspect of software development from <span>ReactJS</span> and <span>Node.js</span> to <span>JavaScript (ES6+)</span> and <span>TypeScript</span>.</p>

                    <p> - Currently seeking <span>Summer 2023</span> Internships!</p>
                    <p>Feel free to get in contact with me.</p>

                    <a href="mailto: artunipuni@gmail.com"><button>Get in touch!</button></a>

                    
                </div>
                <div className="img-div">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe