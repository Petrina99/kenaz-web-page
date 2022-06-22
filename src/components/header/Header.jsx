import React from 'react'

import vectorLeft from '../../assets/vector-left-header.svg';
import searchIcon from '../../assets/search-icon.svg';

import './styles/header.scss';

export const Header = () => {
  return (
    <header>
        <div className='header-container'>
            <section className='section-left'>
                <button className='img-button'>
                    <img src={vectorLeft} alt='vector-left' />
                </button>
                <div className='title-div'>
                    <p>Kenaz</p>
                </div>
            </section>
            <section className='section-right'>
                <ul>
                    <li><a>Media</a></li>
                    <li><a>Marketing</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <button className='img-button'>
                    <img src={searchIcon} alt='search-icon' />
                </button>
            </section>
        </div>
    </header>
  )
}
