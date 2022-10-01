
import React from 'react'
import Name from '../components/Name'
import ButtonToTop from '../components/ButtonToTop'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div style={{backgroundColor: '#121212', minHeight: '100vh', overflowX: 'auto'}}>
            <Navbar/>
            <Sidebar/>
            <Name/>
            <AboutMe/>
            <Projects id="projects-link"/>
            <ButtonToTop/>
            <Footer/>
        </div>
    )
}

export default Home