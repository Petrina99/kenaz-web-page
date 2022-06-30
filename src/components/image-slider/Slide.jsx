import commentIcon from '../../assets/comment-icon.svg';

import './styles/slide.scss';

import { useNavigate } from 'react-router-dom';

export const Slide = ({ slide }) => {

    const navigate = useNavigate();

    const handleRouter = () => {
        navigate('/article', { state: { title: '', slide: slide }})
    }

    return (
        <div className='slide'>
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
            <button onClick={handleRouter}>
                Read Article
            </button>
        </div>
    )
}
