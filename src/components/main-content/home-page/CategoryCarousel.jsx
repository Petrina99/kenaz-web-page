import Slider from 'react-slick';

import { slideArray } from '../../../const';

import './styles/categoryCarousel.scss';

import { CarouselItem } from './';

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
                    <CarouselItem 
                        key={slide.tag} 
                        slide={slide} 
                        styleWidth={styleWidth}
                    />
                ))}
            </Slider>
        </div>
    )
}
