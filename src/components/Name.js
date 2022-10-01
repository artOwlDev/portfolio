

import React from 'react'
import './name.scss'

import TypeWriterEffect from 'react-typewriter-effect';


const Name = () => {
    return (
        <div className='name'>
            <div className="text">

                <div className="text-comp">
                    <h1><TypeWriterEffect text="Hello, my name is" cursorColor='white' typeSpeed={50}hideCursorAfterText='true' startDelay={800} textStyle={{color: '#cebeb2', fontSize: '2.1rem', fontFamily: 'Poppins', margin: '2rem 0'}}/></h1>
                    <h1><TypeWriterEffect text="Artun Selcuk" cursorColor='white' hideCursorAfterText='true' startDelay={2000} textStyle={{color: 'white', fontSize: '4.5rem', fontFamily: 'Poppins', margin: '2rem 0'}}/></h1>

                    <p>I'm a third year computer science student currently studying in Canada. I aim to deepen my understanding in full-stack web development.</p>

                </div>
                
            </div>

            
        </div>
    )
}

export default Name