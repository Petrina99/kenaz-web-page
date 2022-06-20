import { 
    Header,
    CategoriesBar,
    Banner,
    ImageSlider,
    CategoryGroup,
    Sidebar,
    SidebarSocial
} from "../components"

import './styles/home.scss';

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
            </div>
        </main>
        </>
    )
}
