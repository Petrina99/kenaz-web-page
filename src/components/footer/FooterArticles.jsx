import { slideArray } from "../../const"

import './styles/footerArticles.scss';
export const FooterArticles = () => {

    let tempArray = [...slideArray];

    let newArray = [];

    for (let i = 0; i < 3; i++) {
        newArray[i] = tempArray.shift();
    }

    return (
        <section className="footer-articles">
            {newArray.map((item) => (
                <article className="footer-articles-item" key={item.tag}>
                    <div className="footer-articles-text">
                        <div className="footer-articles-text-date">
                            <p>{item.date}</p>
                            <p>{item.commentsNum}</p>
                        </div>
                        <div className="footer-articles-text-title">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                    <div className="footer-articles-image">
                        <img src={item.picture} />
                    </div>
                </article>
            ))}
        </section>
    )
}
