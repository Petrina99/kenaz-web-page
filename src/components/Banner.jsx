import './styles/banner.scss';

export const Banner = ({ bannerWidth, bannerHeight }) => {

    let bannerStyle = bannerWidth == 940 ? 'banner-big' : 'banner-small';

    if(bannerWidth < 620) {
        bannerStyle = 'banner-ultra-small'
    }

    return (
        <div 
            className={`${bannerStyle} banner`}
        >
            <p>banner</p>
            <p>{bannerWidth}x{bannerHeight}</p>
        </div>
    )
}
