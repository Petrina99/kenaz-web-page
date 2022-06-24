import { useState } from 'react';

import './styles/twitterFooter.scss';

import { TwitterArticle } from './';
export const TwitterFooter = () => {

    const [isActive, setIsActive] = useState(8);

    const textArray = [
        `Is this your typical million dollar day in the park? http://enva.to/150vxFC Happy @TrueThemes Day! #ThemeForest pic.twitter.com/EHz7awxOXy`,
        `Happy TrueThemes Day http://enva.to/1dRzgLD`,
        `@robscri I would really want to look into what's taking so long. Thank you ever so much! ^TC`
    ];

    const tags = [
        { tag: 'assueverit', id: 1 }, { tag: 'utroquoe', id: 2 }, { tag: 'probo', id: 3 },
        { tag: 'assuev' , id: 4 }, { tag: 'probo' , id: 5 }, { tag: 'assueverit' , id: 6 },
        { tag: 'titl', id: 7 }, { tag: 'assueverit', id: 8 }, { tag: 'assueverit', id: 9 },
        { tag: 'utroquoe', id: 10 }, { tag: 'probo', id : 11 }, { tag: 'assueverit', id: 12 },
        { tag: 'utroquoe', id : 13} 
    ];

    const handleTag = (e) => {
        
        const { id } = e.currentTarget.dataset;

        setIsActive(parseInt(id));
    }

    return (
        <section className="footer-section twitter-footer-section">
            <header className="t-section-header">
                <div className="t-section-title">
                    <h3>Tags Widget</h3>
                </div>
                <div className='t-section-tags'>
                    {tags.map((item) => (
                        <div 
                            key={item.id}
                            data-id={item.id}
                            className={isActive == item.id ? 'active tag-item' : 'tag-item'}
                            onClick={handleTag}
                        >
                            <p>{item.tag}</p>
                        </div>
                    ))}
                </div>
            </header>
            <div className='t-section-heading'>
                <h3>Twitter Feed</h3>
            </div>
            <div className='t-section-twitter-feed'>
                {textArray.map((item) => (
                    <TwitterArticle text={item} key={item.length} />
                ))}
            </div>
        </section>
    )
}
