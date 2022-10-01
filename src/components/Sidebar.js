

import { Article, GitHub, Instagram, LinkedIn, MailOutlined, Twitter } from '@mui/icons-material'
import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className='sidebar'>
             <div className="icons">
                <a href="https://docs.google.com/document/d/11KIVGY5MAqALXnMc2ZCHag8Xi-KAKaKi/edit#" target="_blank"><Article className='icon resume' alt="resume"/></a>
                <a href="mailto: artunipuni@gmail.com"><MailOutlined className='icon mail'/></a>
                <a href="https://www.linkedin.com/in/artun-selcuk-bb782019a/" target="_blank"><LinkedIn className='icon lin'/></a>
                <a href="https://github.com/artOwlDev" target="_blank"><GitHub className='icon git'/></a>
                <div className="vl"></div>
            </div>
        </div>
    )
}

export default Sidebar