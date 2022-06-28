import React from 'react'

import './styles/CategoryPageItem.scss';
import calanderIcon from '../../../assets/calendar.svg';

import { useNavigate } from 'react-router-dom';

export const CategoryPageItem = ({ slide }) => {

    const navigate = useNavigate();

    const handleRouter = () => {
        navigate('/article', { state: { type: slide }})
    }

    return (
        <article className='category-page-item-container'>
            <div className='category-page-item'>
                <div className='category-page-item-heading'>
                    <h3>{slide.title}</h3>
                </div>
                <div className='category-page-item-date'>
                    <div className='item-date-container'>
                        <div>
                            <img src={calanderIcon} />
                            <p>{slide.date}</p>
                        </div>
                        <p>Author: Matej Sudar</p>
                        <p>{slide.commentsNum} comments</p>
                    </div>
                </div>
                <div className='category-page-img'>
                    <img src={slide.picture} />
                </div>
                <div className='category-page-item-text'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. 
                    </p>
                    <button onClick={handleRouter}>
                        Read article
                    </button>
                </div>
            </div>
        </article>
    )
}
