import { useState } from 'react';

import Slider from 'react-slick';

import { imageArray } from '../../const';

import exitIcon from '../../assets/x-icon.svg';

import './styles/bottomSlider.scss';

export const BottomSlider = () => {

    let newArray = [...imageArray];

    newArray.splice(-1);

    const [currentSlide, setCurrentSlide] = useState(1);
    const [isZoom, setIsZoom] = useState(false);

    const handleSlide = (e) => {
        const { id } = e.currentTarget.dataset;

        setCurrentSlide(parseInt(id));
    }

    const handleNextArrow = () => {
        if (currentSlide == 7) {
            setCurrentSlide(1);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    const handlePrevArrow = () => {
        if (currentSlide == 1) {
            setCurrentSlide(7);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }

    const PrevArrow = (props) => {
        const { onClick, style } = props;

        const handleClick = () => {
            onClick();
            setTimeout(() => {
                handlePrevArrow();
            }, 100);
        }

        return (
            <button 
                className='slick-prev'
                style={{...style}}
                onClick={handleClick}
            />
        )
    }

    const NextArrow = (props) => {

        const { onClick, style } = props;

        const handleClick = () => {
            onClick();
            setTimeout(() => {
                handleNextArrow();
            }, 100);
        }

        return (
            <button 
                className='slick-next'
                style={{...style}}
                onClick={handleClick}
            />
        )
    }

    const NormalSlider = () => {

        const settings = {
            speed: 250,
            slidesToShow: 1,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        }

        return (
            <div className={`bottom-slider`}>
            <Slider {...settings}>
                {newArray.map((item) => (
                    <div className='bottom-slide' key={item.id} >
                        <div 
                            className='zoom-in'
                            onClick={() => setIsZoom(true)}
                        ></div>
                        <img src={imageArray[currentSlide - 1].bigPicture} />
                    </div>
                ))}
            </Slider>
            <div className='thumbnail-container'>
                {newArray.map((image) => (
                    <div 
                        key={image.id}
                        data-id={image.id} 
                        className='thumbnail-item'
                        onClick={handleSlide}
                    >
                        <img src={image.picture} />
                    </div>
                ))}
            </div>
        </div>
        )
    }

    const ZoomedIn = () => {
        return (
            <div className='zoomed-in-pic'>
                <div 
                    onClick={() => setIsZoom(false)}
                    className='zoomed-in-pic-exit'
                >
                    <img src={exitIcon} />
                </div>
                <img src={newArray[currentSlide - 1].bigPicture} />
            </div>
        )
    }

    const ConditionalRender = () => {
        if (isZoom) {
            return <ZoomedIn />
        } else {
            return <NormalSlider />
        }
    }

    return (
        <ConditionalRender />
    )
}