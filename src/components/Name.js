

import React, { useEffect, useState } from 'react'
import './name.scss'
import nyc from "../img/nyc.jpg"

import TypeWriterEffect from 'react-typewriter-effect';
import { ArrowDropDownCircle } from '@mui/icons-material';


const Name = () => {

    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowArrow(false);
            } else {
                setShowArrow(true);
            }
        });
    }, []);

    return (
        <div className='name'>

            <div className="text">

                <div className="text-comp">
                    <h1><TypeWriterEffect text="Hello, my name is" cursorColor='white' typeSpeed={50}hideCursorAfterText='true' startDelay={800} textStyle={{color: '#cebeb2', fontSize: '2.1rem', fontFamily: 'Poppins', margin: '2rem 0'}}/></h1>
                    <h1><TypeWriterEffect text="Artun Selcuk" cursorColor='white' hideCursorAfterText='true' startDelay={2000} textStyle={{color: 'white', fontSize: '4.5rem', fontFamily: 'Poppins', margin: '2rem 0'}}/></h1>

                    <p>I'm a third year computer science student currently studying in Canada. I aim to deepen my understanding in full-stack web development.</p>

                    {showArrow && 
                        <div className="arrow">
                            <ArrowDropDownCircle className='icon'/>
                        </div>
                    }
                    

                </div>
                
            </div>

            
        </div>
    )
}

export default Name