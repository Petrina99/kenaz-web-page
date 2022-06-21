import { 
    Header,
    CategoriesBar,
    Banner,
    ImageSlider,
    CategoryGroup,
    Sidebar,
    SidebarSocial,
    CategoryCarousel
} from "../components"

import './styles/home.scss';

import facebookComments from '../assets/facebook-comments.svg';

export const Home = () => {
    return (
        <>
        <Header />
        <CategoriesBar />
        <Banner bannerWidth={940} bannerHeight={120} />
        <ImageSlider />
        <main>
            <div className="main-content">
                <CategoryGroup title='News' size={3} />
                <CategoryGroup title='Sports' size={3} />
                <Banner bannerWidth={620} bannerHeight={120} />
                <CategoryGroup title='Business' size={4} />
                <Banner bannerWidth={620} bannerHeight={120} />
                <CategoryCarousel title='News Carousel' size={2} />
                <div className="double-carousel">
                    <CategoryCarousel title='Editorials' size={1} />
                    <CategoryCarousel title='Local News' size={1} />
                </div>
                <Banner bannerWidth={940} bannerHeight={120} />
                <ImageSlider />
            </div>
            <div className="side-content">
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
            </div>
        </main>
        </>
    )
}
