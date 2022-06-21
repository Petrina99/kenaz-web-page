import Slider from 'react-slick';

import { slideArray } from '../../const';

import './styles/categoryCarousel.scss';

export const CategoryCarousel = ({ title, size }) => {
    
    let styleWidth = size == 2 ? 'big' : 'small';
    let categoryStyle = title.includes('Carousel') ? 'carousel' : 'editorials';

    const settings = {
        speed: 500,
        slidesToShow: size,
        arrows: true,
    }

    return (
        <div className={`carousel carousel-${styleWidth} category-${categoryStyle}`}>
            <article className='carousel-title'>
                <h3>{title}</h3>
            </article>
            <Slider {...settings}>
                {slideArray.map((slide) => (
                    <div className={`carousel-slider-${styleWidth}`} key={slide.tag}>
                        <div className='carousel-img'></div>
                        <div className='carousel-text'>
                            <p>{slide.date}</p>
                            <h3>{slide.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
