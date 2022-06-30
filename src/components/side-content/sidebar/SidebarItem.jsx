import './styles/sidebarItem.scss';

import commentIcon from '../../../assets/comment-icon.svg';

import { useNavigate } from 'react-router-dom';

export const SidebarItem = ({ item }) => {
    
    const navigate = useNavigate();

    const handleRouter = () => {
        navigate('/article', { state: { title: '', slide: item }})
    }

    return (
        <div className="sidebar-item" onClick={handleRouter}>
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
