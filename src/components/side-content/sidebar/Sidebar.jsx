import './styles/sidebar.scss';

import { SidebarHeader, SidebarItem } from '..';

import { slideArray } from '../../../const';

export const Sidebar = () => {

    return (
        <aside className="sidebar">
            <SidebarHeader />
            {slideArray.map((item) => {
                return <SidebarItem item={item} key={item.tag} />
            })}
        </aside>
    )
}
