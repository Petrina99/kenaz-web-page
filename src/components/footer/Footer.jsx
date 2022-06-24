import React from 'react'

import './styles/footer.scss';

import { LeftSection, MidSection } from './';
export const Footer = () => {

    return (
        <footer className='footer-background'>
            <div className='footer-container'>
                <LeftSection />
                <MidSection />
                <LeftSection />
            </div>
        </footer>
    )
}
