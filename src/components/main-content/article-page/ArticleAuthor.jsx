import './styles/articleAuthor.scss';

import authorPic from '../../../assets/author.svg';

export const ArticleAuthor = () => {
    return (
        <section className="author-container">
            <div className="author-heading">
                <h3>About The Author</h3>
            </div>
            <div className='author-content-container'>
                <div className='author-img'>
                    <img src={authorPic} />
                </div>
                <div className='author-text'>
                    <p>
                        Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem. 
                    </p>
                </div>
            </div>
        </section>
    )
}
