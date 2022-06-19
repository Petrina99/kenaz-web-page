import { 
    Header,
    CategoriesBar,
    Banner,
    ImageSlider,
    CategoryGroup,
    Sidebar
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
            </div>
        </main>
        </>
    )
}
