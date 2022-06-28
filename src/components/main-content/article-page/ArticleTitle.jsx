import React from 'react'

import { useLocation } from 'react-router-dom';

import './styles/articleTitle.scss';

export const ArticleTitle = () => {

    const { state } = useLocation();

    return (
        <section className='article-title-container'>
            <div className='article-title-img'>
                <img src={state.type.picture} />
            </div>
            <div className='article-title-date'>
                <p>{state.type.date}</p>
            </div>
            <div className='article-title-heading'>
                <h3>{state.type.title}</h3>
            </div>
        </section>
    )
}
