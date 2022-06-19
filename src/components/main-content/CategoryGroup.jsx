import './styles/categoriesSection.scss';

import { slideArray } from '../../const';

import { CategoryItem } from './CategoryItem';
export const CategoryGroup = ({ title, size }) => {

    let tempArray = [...slideArray];

    let newArray = [];

    for (let i = 0; i < size; i++) {
        newArray[i] = tempArray.pop();
    }

    return (
        <section className={`category-${title} category`}>
            <div className='title-link'>
                <h3>{title}</h3>
                <a>See all</a>
            </div>
            <div className='articles-layout'>
                {newArray.map((item) => {
                    return <CategoryItem item={item} />
                })}
            </div>
        </section>
    )
}
