import React from 'react'

import './styles/footer.scss';

import { LeftSection, MidSection, TwitterFooter } from './';
export const Footer = () => {

    return (
        <footer className='footer-background'>
            <section className='footer-container'>
                <LeftSection />
                <MidSection />
                <TwitterFooter />
            </section>
            <section className='footer-bottom'>
                <div className='footer-bottom-container'>
                    <div>
                        <p>
                            © 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia
                        </p>
                    </div>
                    <div>
                        <p>
                            Typography - Templates - Contact Form - 404 Page
                        </p>
                    </div>
                </div> 
            </section>
        </footer>
    )
}
