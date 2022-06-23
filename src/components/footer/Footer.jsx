import React from 'react'

import './styles/footer.scss';

import { LeftSection } from './';
export const Footer = () => {

    return (
        <footer className='footer-background'>
            <div className='footer-container'>
                <LeftSection />
            </div>
        </footer>
    )
}
