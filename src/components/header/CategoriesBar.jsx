import { useState, useEffect } from 'react';

import './styles/categoriesBar.scss';

import { categoriesBarArray } from '../../const';

import { useNavigate, useLocation } from 'react-router-dom';

export const CategoriesBar = () => {

    const navigate = useNavigate();

    const { state } = useLocation();
    
    const [isActive, setActive] = useState('');

    const capitalizeString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleRouter = (title) => {
        navigate('/category', { state: { title: capitalizeString(title), slide: null } });
    }

    const toggleActive = (e) => {
        const { title } = e.currentTarget;

        setActive(title);

        handleRouter(capitalizeString(title));
    }

    useEffect(() => {
        if (state && state.title != null) {
            setActive(state.title.toLowerCase());
        } else {
            setActive('');
        }
    }, [isActive]);

    return (
        <section className='categories-section'>
            <div className="categories-container">
                <ul>
                    {categoriesBarArray.map((item) => (
                        <li 
                            className={isActive == item.tag ? 'active-list' : `${item.tag}-list`}
                            title={item.tag}
                            onClick={toggleActive}
                            key={item.tag}
                        >
                            <a>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}