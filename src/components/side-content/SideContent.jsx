import { Sidebar, SidebarSocial, Banner } from '../';

import facebookComments from '../../assets/facebook-comments.svg';

import './sideContent.scss';

export const SideContent = () => {
    return (
        <aside className='side-content'>
            <Sidebar />
            <SidebarSocial />
            <section className="two-banner-section">
                <div className="two-banner-div">
                    <Banner bannerWidth={120} bannerHeight={120} />
                    <Banner bannerWidth={120} bannerHeight={120} />
                </div>
            </section>
            <aside className="facebook-comments">
                <img src={facebookComments} />
            </aside>
            <section className="two-banner-section">
                <div className="two-banner-div">
                    <Banner bannerWidth={120} bannerHeight={120} />
                    <Banner bannerWidth={120} bannerHeight={120} />
                </div>
            </section>
        </aside>
    )
}
