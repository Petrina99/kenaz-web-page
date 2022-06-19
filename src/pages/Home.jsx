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
        <main>
        <ImageSlider />
            <div className="main-content">
                <CategoryGroup title='News' size={3} />
                <Sidebar />
                <CategoryGroup title='Sports' size={3} />
                <Banner bannerWidth={620} bannerHeight={120} />
            </div>
        </main>
        </>
    )
}
