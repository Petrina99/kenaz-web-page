import { SocialItem } from "./"

import { socialArray } from "../../../const";

import './styles/sidebarSocial.scss';

export const SidebarSocial = () => {

    return (
        <aside className="sidebar-social">
            <div className="sidebar-social-heading">
                <h3>Social</h3>
            </div>
            
            <section>
                {socialArray.map((item) => {
                    return <SocialItem key={item.item} item={item} />
                })}
            </section>
        </aside>
    )
}
