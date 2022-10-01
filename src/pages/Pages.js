

import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Home from './Home'

const Pages = () => {
    return (
        <Router>
            <div className='pages'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default Pages