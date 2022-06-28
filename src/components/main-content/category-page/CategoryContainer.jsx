import { useLocation } from 'react-router-dom';

import './styles/categoryContainer.scss';

import { CategoryPageItem, CategoryFooter } from './';

import { slideArray } from '../../../const';

export const CategoryContainer = () => {

    const { state } = useLocation();

    return (
        <div className='category-page-container'>
            <div className='category-container-heading'>
                <h3>{state === null ? 'News' : state.type}</h3>
            </div>
            <section className='category-page-group'>
                {slideArray.map((slide) => (
                    <CategoryPageItem key={slide.tag} slide={slide} />
                ))}
            </section>
            <CategoryFooter />
        </div>
    )
}
