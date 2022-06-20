import Slider from 'react-slick';

import './styles/imageSlider.scss';

import { slideArray } from '../../const';

import { Slide } from './Slide';

export const ImageSlider = () => {

    const settings = {
        speed: 500,
        slidesToShow: 1,
        arrows: true,
    }
  
    return (
        <div className='slider'>
            <Slider {...settings}>
                {slideArray.map((slide) => {
                    return <Slide slide={slide} key={slide.tag} />
                })}
            </Slider>
        </div>
    )
}
