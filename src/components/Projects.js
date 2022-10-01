
import React from 'react'
import "./projects.scss"
import foodie from '../img/foodie.JPG'
import whisper from '../img/whisper.JPG'
import { Add, GitHub, Launch } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Projects = () => {

    useEffect(() => {
        Aos.init({
            duration: 1800,
            once: true,
            easing: "ease"
        })
    }, [])


    return (
        <div className='projects' data-aos="fade-in">
            <div className="text-area">
                <h1>Projects</h1>
                <div className="hl"></div>
            </div>

            <div className="project-div">
                <div className="project">
                    <h1 className='project-title'><span>01. </span>Fooodie</h1>
                    <img src={foodie} alt="" />
                    <div className="info">
                        <p>Fooodie is a website that lets users view the recipes to their favorite dishes. Supports over 5000+ recipes.</p>
                        <p>React - Styled Components - Spoonacular API</p>
                        <div className="icons-div">
                            <a href="https://github.com/artOwlDev/foodie" target="_blank"><GitHub className='icon'/></a>
                            <a href="https://www.fooodie.info/" target='_blank'><Launch className='icon'/></a>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <h1 className='project-title'><span>02. </span>Whisper.tv <span className='incomplete'>(IN DEVELOPMENT)</span></h1>
                    <img src={whisper} alt="" />
                    <div className="info">
                        <p>A social platform that lets users view and share their thoughts on Movies and TV shows.</p>
                        <p>React - Firebase - Express - TMDB API</p>
                        <div className="icons-div">
                            <a href="https://github.com/artOwlDev/Whisper.tv" target="_blank"><GitHub className='icon'/></a>
                            <a target='_blank'><Launch className='icon'/></a>
                        </div>
                    </div>
                </div>

                
    
                <div className="project new">

                    <div className="more-div">
                        <Add className='icon'/>
                        <p>More to come...</p>
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default Projects