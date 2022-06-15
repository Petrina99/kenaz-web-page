import React from 'react'

import vectorLeft from '../assets/vector-left-header.svg';
import searchIcon from '../assets/search-icon.svg';

import './styles/header.scss';

export const Header = () => {
  return (
    <header>
        <div className='header-container'>
            <section className='section-left'>
                <div className='img-container'>
                    <img src={vectorLeft} />
                </div>
                <div className='title-div'>
                    <p>Kenaz</p>
                </div>
            </section>
            <section className='section-right'>
                <ul>
                    <li>Media</li>
                    <li>Marketing</li>
                    <li>Contact</li>
                </ul>
                <div className='img-container'>
                    <img src={searchIcon} />
                </div>
            </section>
        </div>
    </header>
  )
}
