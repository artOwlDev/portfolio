import { VerticalAlignTop } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ButtonToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            {showTopBtn && (
                <VerticalAlignTop style={{position: 'fixed', left: '1rem', bottom: '1rem' , color: '#26b7f1', cursor: 'pointer', transition: 'all 0.5s ease'}}onClick={scrollUp}/>
            )}
            
        </div>
    )
}

export default ButtonToTop