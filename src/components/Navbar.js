

import React, { useState } from 'react'
import './navbar.scss'

const Navbar = () => {

    const scrollUp = (px) => {
        window.scrollTo({
            top: px,
            behavior: 'smooth'
        })
    }

    return (
        <div className= "navbar">
            <div className="left">
                <a href="https://www.artunselcuk.com"><h1>artun.</h1></a>
            </div>

            <div className="right">
                <div className="links">
                    <span onClick={() => scrollUp(1000)} className="about">About</span>
                    <span onClick={() => scrollUp(1800)} className="projects-nav">Projects</span>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar