import './styles/socialItem.scss';

export const SocialItem = ({ item }) => {

    return (
        <div className='sidebar-social-item'>
            <img src={item.picture}/>
            <div className='social-item-message'>
                <p>{item.message}</p>
            </div>
            <div className='social-item-fans'>
                <p>{item.fanNumber}</p>
            </div>
        </div>
    )
}
