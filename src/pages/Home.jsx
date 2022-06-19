import { 
    Header,
    CategoriesBar,
    Banner,
    ImageSlider,
    IndividualCategory,
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
                <IndividualCategory title='News' />
                <Sidebar />
                <IndividualCategory title='Sports' />
            </div>
        </main>
        </>
    )
}
