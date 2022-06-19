import './styles/categoriesSection.scss';

export const IndividualCategory = ({ title }) => {

    return (
        <section className={`category-${title} category`}>
            <div className='title-link'>
                <h3>{title}</h3>
                <a>See all</a>
            </div>
        </section>
    )
}
