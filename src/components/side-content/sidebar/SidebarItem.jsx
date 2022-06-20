import './styles/sidebarItem.scss';

import commentIcon from '../../../assets/comment-icon.svg';

export const SidebarItem = ({ item }) => {
    return (
        <div className="sidebar-item">
            <div className='sidebar-item-content'>
                <div className='sidebar-item-text'>
                    <div>
                        <p>{item.date}</p>
                        <p><img src={commentIcon} /> {item.commentsNum}</p>
                    </div>
                    <h3>{item.title}</h3>
                </div>
                <div className='sidebar-item-img'>
                </div>
            </div>
            
        </div>
    )
}
