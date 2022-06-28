import {
    Header,
    CategoriesBar,
    Banner,
    SideContent,
    Footer,
    ArticleTitle,
    ArticleContent,
    ArticleAuthor,
    ArticleComments
} from '../components';

import './styles/home.scss';

export const Article = () => {
    return (
        <>
            <Header />
            <CategoriesBar />
            <Banner bannerWidth={940} bannerHeight={120} />
            <ArticleTitle />
            <main>
                <div className='main-content'>
                    <ArticleContent />
                    <Banner bannerWidth={620} bannerHeight={120} />
                    <ArticleAuthor />
                    <ArticleComments />
                </div>
                <SideContent />
            </main>
            <Footer />
        </>
    )
}
