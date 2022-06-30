import './styles/categoryGroup.scss';

import { slideArray } from '../../../const';

import { CategoryItem } from './CategoryItem';

import { useNavigate } from 'react-router-dom';

export const CategoryGroup = ({ title, size }) => {

    const navigate = useNavigate();

    let tempArray = [...slideArray];

    let newArray = [];

    for (let i = 0; i < size; i++) {
        newArray[i] = tempArray.pop();
    }

    let sectionStyle = size == 3 ? 'big-pics' : 'small-pics';

    const handleRouter = () => {
        navigate('/category', { state: {title: title, slide: null }});
    }

    return (
        <section className={`category-${title} category`}>
            <div className='title-link'>
                <h3>{title}</h3>
                <a onClick={handleRouter}>See all</a>
            </div>
            <div className={`articles-layout ${sectionStyle}`}>
                {newArray.map((item) => {
                    return <CategoryItem item={item} key={item.tag} size={size} />
                })}
            </div>
        </section>
    )
}
