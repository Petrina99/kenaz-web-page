import Slider from 'react-slick';

import { slideArray } from '../../const';

import './styles/categoryCarousel.scss';

import thumbnailPicture from '../../assets/category-image.svg';

export const CategoryCarousel = ({ title, size }) => {
    
    let styleWidth = size == 2 ? 'big' : 'small';
    let categoryStyle = title.includes('Carousel') ? 'carousel' : 'editorials';

    const settings = {
        speed: 500,
        slidesToShow: 2,
        arrows: true,
    }

    return (
        <div className={`carousel-${styleWidth} category-${categoryStyle}`}>
            <div className='carousel-title'>
                <h3>{title}</h3>
            </div>
            <Slider {...settings}>
                {slideArray.map((slide) => (
                    <div className='carousel-slide' key={slide.tag}>
                        <img src={thumbnailPicture} />
                        <h3>{slide.title}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
