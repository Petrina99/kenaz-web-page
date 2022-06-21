import Slider from 'react-slick';

import { BottomSlide } from './';

import { imageArray } from '../../const';

import './styles/bottomSlider.scss';

export const BottomSlider = () => {

    let tempArray = [...imageArray];

    let newArray = [];

    for (let i = 0; i < 7; i++) {
        newArray[i] = tempArray.pop();
    }
    
    console.log(newArray);
    const settings = {
        speed: 500,
        slidesToShow: 1,
        arrows: true,
    }

    return (
        <div className={`bottom-slider`}>
            <Slider {...settings}>
                {imageArray.map((image) => {
                    return <BottomSlide key={image.id} slide={image} />
                })}
            </Slider>
            <div className='thumbnail-container'>
                {newArray.map((image) => (
                    <div key={image.id} className='thumbnail-item'>
                        <img src={image.picture} />
                    </div>
                ))}
            </div>
        </div>
    )
}
