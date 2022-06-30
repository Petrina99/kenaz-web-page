import React from 'react'

import { useNavigate } from 'react-router-dom';

export const CarouselItem = ({ slide, styleWidth }) => {

    const navigate = useNavigate();

    const handleRouter = () => {
        navigate('/article', { state: { title: '', slide: slide }})
    }

    return (
        <div 
            className={`carousel-slider-${styleWidth}`} 
            onClick={handleRouter}
        >
            <div className='carousel-img'></div>
            <div className='carousel-text'>
            <p>{slide.date}</p>
                <h3>{slide.title}</h3>
            </div>
        </div>
    )
}
