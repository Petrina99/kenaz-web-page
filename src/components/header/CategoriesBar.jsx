import { useState } from 'react';

import './styles/categoriesBar.scss';

import { categoriesBarArray } from '../../const';

export const CategoriesBar = () => {

    const [isActive, setActive] = useState('news');
   
    const toggleActive = (e) => {
        const { title } = e.currentTarget;

        setActive(title);
    }

    return (
        <section className='categories-section'>
            <div className="categories-container">
                <ul>
                    {categoriesBarArray.map((item) => (
                        <li 
                            className={isActive == item.tag ? 'active-list' : `${item.tag}-list`}
                            title={item.tag}
                            onClick={toggleActive}
                        >
                            <a>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}