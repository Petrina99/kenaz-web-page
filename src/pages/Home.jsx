import { 
    Header,
    CategoriesBar,
    Banner,
    ImageSlider,
    CategoryGroup,
    CategoryCarousel,
    BottomSlider,
    Footer,
    SideContent
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
                    <CategoryGroup title='Business' size={4} />
                    <Banner bannerWidth={620} bannerHeight={120} />
                    <CategoryCarousel title='News Carousel' size={2} />
                    <div className="double-carousel">
                        <CategoryCarousel title='Editorials' size={1} />
                        <CategoryCarousel title='Local News' size={1} />
                    </div>
                    <Banner bannerWidth={940} bannerHeight={120} />
                    <BottomSlider />
                </div>
                <SideContent />
            </main>
            <Footer />
        </>
    )
}