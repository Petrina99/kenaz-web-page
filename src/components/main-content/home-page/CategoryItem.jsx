import './styles/categoryItem.scss';
import thumbnailPicture from '../../../assets/category-image.svg';

export const CategoryItem = ({ item, size }) => {

  let itemStyle = size == 3 ? 'normal' : 'small';

  return (
    <div className={`category-item-${itemStyle}`}>
        <img src={thumbnailPicture} />
        <div>
          <p>{item.date}</p>
          <h3>{item.title}</h3>
        </div>
    </div>
  )
}
