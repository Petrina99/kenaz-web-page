import {
    Header,
    CategoriesBar,
    Banner,
    ImageSlider,
    SideContent,
    Footer,
    CategoryContainer
} from '../components';

import './styles/home.scss';

export const Category = () => {
    return (
        <>
            <Header />
            <CategoriesBar />
            <Banner bannerWidth={940} bannerHeight={120} />
            <ImageSlider />
            <main>
                <div className='main-content'>
                   <CategoryContainer />
                   <Banner bannerWidth={620} bannerHeight={120} />
                </div>
                <SideContent />
            </main>
            <Footer />
        </>
        )
}
