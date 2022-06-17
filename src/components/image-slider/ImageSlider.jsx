import Slider from 'react-slick';

import './imageSlider.scss';

import commentIcon from '../../assets/comment-icon.svg';
import { slideArray } from '../../const';

export const ImageSlider = () => {

  const settings = {
    speed: 500,
    slidesToShow: 1,
    arrows: true,
  }
  
  return (
    <div className='slider'>
      <Slider {...settings}>
        {slideArray.map((slide) => (
          <div className='slide' key={slide.tag}>
            <img src={slide.picture} />
            <h3>{slide.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  )
}
