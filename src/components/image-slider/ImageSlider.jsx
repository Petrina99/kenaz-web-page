import Slider from 'react-slick';

import './imageSlider.scss';

import sliderImageFirst from '../../assets/slider-image.png';
import sliderImageSecond from '../../assets/slider-image-2.jpg';
import sliderImageThird from '../../assets/slider-image-3.jpg';

export const ImageSlider = () => {

  const settings = {
    speed: 500,
    slidesToShow: 1,
    arrows: true,
  }
  return (
    <div className='slider'>
      <Slider {...settings}>
        <div className='slide'>
          <img src={sliderImageFirst} />
        </div>
        <div className='slide'>
          <img src={sliderImageSecond} />
        </div>
        <div className='slide'>
          <img src={sliderImageThird} />
        </div>
      </Slider>
    </div>
  )
}
