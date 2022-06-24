import twitterBird from '../../assets/twitter-bird.svg';

export const TwitterArticle = ({ text }) => {

    return (
        <article>
            <div className='twitter-feed-username'>
                <div className='twitter-feed-icon'><img src={twitterBird} /></div>
                <p>Envato @envato</p>
            </div>
            <div className='twitter-feed-text'>
                <p>{text}</p>
            </div>
        </article>
    )
}
