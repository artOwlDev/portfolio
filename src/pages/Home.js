
import React from 'react'
import Name from '../components/Name'
import ButtonToTop from '../components/ButtonToTop'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'
import nyc3 from "../img/nyc3.jpg"
import projects from "../img/projects.jpg"
import "./home.scss"

const Home = () => {
    return (
        <div style={{backgroundColor: '#121212', minHeight: '100vh', overflowX: 'auto'}}>
            <div className='background-con'>
                <img src={nyc3} className="nyc-image" alt="" />
                <Navbar/>
                <Sidebar/>
                <Name/>
            </div>
            <AboutMe/>

            <div className="projects-div">
                <Projects id="projects-link"/>
            </div>
            <ButtonToTop/>
            <Footer/>
        </div>
    )
}

export default Home