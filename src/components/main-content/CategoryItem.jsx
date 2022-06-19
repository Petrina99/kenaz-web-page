import './styles/categoryItem.scss';
import thumbnailPicture from '../../assets/category-image.svg';

export const CategoryItem = ({ item }) => {
  return (
    <div className="category-item">
        <img src={thumbnailPicture} />
        <p>{item.date}</p>
        <h3>{item.title}</h3>
    </div>
  )
}
