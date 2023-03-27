
import React from 'react'
import "./projects.scss"
import foodie from '../img/foodie.JPG'
import whisper from '../img/whisper.JPG'
import pixelton from '../img/pixelton.JPG'
import staysafe from "../img/staysafe.JPG"
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
                    <h1 className='project-title'><span>01. </span>StaySafe</h1>
                    <img src={staysafe} alt="" />
                    <div className="info">
                        <p>A website made for safety! Track nearby wildfires, active volcanoes, tropical storms etc. </p>
                        <p>React - Google Maps API - NASA API</p>
                        <div className="icons-div">
                            <a href="https://github.com/artOwlDev/StaySafe" target="_blank"><GitHub className='icon'/></a>
                            <a href="http://www.stay-safe.live" target='_blank'><Launch className='icon'/></a>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <h1 className='project-title'><span>02. </span>Fooodie</h1>
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
                    <h1 className='project-title'><span>03. </span>Pixelton</h1>
                    <img src={pixelton} alt="" />
                    <div className="info">
                        <p>A very simple project specifically made for artists. Quickly sketch your pixel-art and export at any time!</p>
                        <p>React</p>
                        <div className="icons-div">
                            <a href="https://github.com/artOwlDev/pixel-art-maker" target="_blank"><GitHub className='icon'/></a>
                            <a href="https://www.pixelton.art" target='_blank'><Launch className='icon'/></a>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <h1 className='project-title'><span>04. </span>Whisperr <span className='incomplete'>(IN DEVELOPMENT)</span></h1>
                    <img src={whisper} alt="" />
                    <div className="info">
                        <p>A social platform that lets users review, rate and share their opinions on their favorite TV series.</p>
                        <p>React - Firebase - Express - TMDB API</p>
                        <div className="icons-div">
                            <a href="https://github.com/artOwlDev/Whisper.tv" target="_blank"><GitHub className='icon'/></a>
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