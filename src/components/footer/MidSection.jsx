import './styles/midSection.scss';

import { FooterArticles } from './';

export const MidSection = () => {
    return (
        <section className="footer-section mid-footer-section">
            <header className="m-section-header">
                <div className="m-section-title">
                    <h3>Newsletter</h3>
                </div>
                <div className="m-section-para">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante...
                    </p>
                </div>
                <div className="m-section-email">
                    <input type='email' placeholder='Your email'/>
                    <button>Subscribe</button>
                </div>
            </header>
            <div className='m-section-heading'>
                <h3>Random Posts</h3>
            </div>
            <FooterArticles />
        </section>
    )
}
