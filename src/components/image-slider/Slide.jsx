import commentIcon from '../../assets/comment-icon.svg';

import './styles/slide.scss';

export const Slide = ({ slide }) => {
    return (
        <div className='slide' key={slide.tag}>
            <div className='img-div'>
                <img src={slide.picture} />
            </div>
            <div className='date-div'>
                <p>
                    {slide.date}
                </p>
                <p>
                    <img src={commentIcon} />      {slide.commentsNum} Comments
                </p>
            </div>
            <div className='title-div'>
                <h3>{slide.title}</h3>
            </div>
            <button>
                Read Article
            </button>
        </div>
    )
}
