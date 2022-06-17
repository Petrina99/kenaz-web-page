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
                <div className='img-div'>
                    <img src={slide.picture} />
                </div>
                <div className='date-div'>
                    <p>
                        {slide.date}
                    </p>
                    <p>
                        <img src={commentIcon} />      {slide.commentsNum} Comments
                    </p>
                </div>
                <div className='title-div'>
                    <h3>{slide.title}</h3>
                </div>
                <button>
                    Read Article
                </button>
            </div>
            ))}
        </Slider>
        </div>
    )
}
