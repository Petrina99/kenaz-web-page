import { useState } from 'react';

import './styles/categoriesBar.scss';

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
                    <li 
                        className={isActive == 'news' ? 'active-list' : 'news-list'}
                        title='news'
                        onClick={toggleActive}
                    >
                        <a>NEWS</a>
                    </li>
                    <li 
                        className={isActive == 'business' ? 'active-list' : 'business-list'}
                        title='business' 
                        onClick={toggleActive}
                    >
                        <a>BUSINESS</a>
                    </li>
                    <li 
                        className={isActive == 'sport' ? 'active-list' : 'sport-list'}
                        title='sport'
                        onClick={toggleActive}
                    >
                        <a>SPORT</a>
                    </li>
                    <li 
                        className={isActive == 'life' ? 'active-list' : 'life-list'}
                        title='life'
                        onClick={toggleActive}
                    >
                        <a>LIFE</a>
                    </li>
                    <li 
                        className={isActive == 'tech' ? 'active-list' : 'tech-list'}
                        title='tech'
                        onClick={toggleActive}
                    >
                        <a>TECH</a>
                    </li>
                    <li 
                        className={isActive == 'travel' ? 'active-list' : 'travel-list'}
                        title='travel'
                        onClick={toggleActive}
                    >
                        <a>TRAVEL</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
