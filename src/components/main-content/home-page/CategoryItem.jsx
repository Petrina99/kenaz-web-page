import './styles/categoryItem.scss';
import thumbnailPicture from '../../../assets/category-image.svg';

import { useNavigate } from 'react-router-dom';

export const CategoryItem = ({ item, size, title }) => {

    const navigate = useNavigate();

    let itemStyle = size == 3 ? 'normal' : 'small';

    const handleRouter = () => {
        navigate('/article', { state: { title: title, slide: item }});
    }
    
    return (
        <div 
            className={`category-item-${itemStyle}`}
            onClick={handleRouter}
        >
            <img src={thumbnailPicture} />
            <div>
                <p>{item.date}</p>
                <h3>{item.title}</h3>
            </div>
        </div>
    )
}
