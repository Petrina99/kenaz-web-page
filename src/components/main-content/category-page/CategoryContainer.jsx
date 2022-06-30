import { useLocation } from 'react-router-dom';

import './styles/categoryContainer.scss';

import { CategoryPageItem, CategoryFooter } from './';

import { slideArray } from '../../../const';

export const CategoryContainer = () => {

    const { state } = useLocation();

    return (
        <div className='category-page-container'>
            <div className='category-container-heading'>
                <h3>{state.title === null ? 'News' : state.title}</h3>
            </div>
            <section className='category-page-group'>
                {slideArray.map((slide) => (
                    <CategoryPageItem key={slide.tag} slide={slide} title={state.title} />
                ))}
            </section>
            <CategoryFooter />
        </div>
    )
}
