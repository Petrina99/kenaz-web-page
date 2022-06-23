import './styles/leftSection.scss';

import logo from '../../assets/footer-logo.svg';

import { footerSocialArray } from '../../const';

export const LeftSection = () => {
    return (
        <section className='left-footer-section'>
            <header className='l-section-header'>
                <div>
                    <img src={logo} />
                </div>
                <div className='l-section-title'>
                    <h3>Kenaz</h3>
                </div>
                <div className='l-section-para'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.
                    </p>
                </div>
                <div className='l-section-social'>
                    {footerSocialArray.map((item) => (
                        <div className='l-section-social-icon' key={item.alt}>
                            <img src={item.picture} alt={item.alt} />
                        </div>
                    ))}
                </div>
            </header>
        </section>
    )
}
