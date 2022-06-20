import { useState } from 'react'

import './styles/sidebarHeader.scss';

export const SidebarHeader = () => {

    const [isActive, setIsActive] = useState('popular');

    const handleClick = (e) => {
        const { title } = e.currentTarget;

        if (isActive == title) {
            setIsActive(title);
        } 
        else {
            setIsActive(title);
        }
    }

    return (
        <header className='sidebar-header-div'>
            <p 
                title='popular' 
                className={isActive == 'popular' ? 'active-par' : ''}
                onClick={handleClick}
            >
                Popular
            </p>
            <p 
                title='rated' 
                className={isActive == 'rated' ? 'active-par' : ''}
                onClick={handleClick}
            >
                Top Rated
            </p>
            <p 
                title='comments' 
                className={isActive == 'comments' ? 'active-par' : ''}
                onClick={handleClick}
            >
                Comments
            </p>
        </header>
    )
}
