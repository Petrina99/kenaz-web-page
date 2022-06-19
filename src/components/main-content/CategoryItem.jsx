export const CategoryItem = ({ item }) => {
  return (
    <div className="category-item">
        <img src={item.picture} />
        <p>{item.date}</p>
        <h3>{item.title}</h3>
    </div>
  )
}
