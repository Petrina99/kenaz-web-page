import './styles/banner.scss';

export const Banner = ({ bannerWidth }) => {

    let bannerStyle = bannerWidth == 940 ? 'banner-big' : 'banner-small';

    return (
        <div 
            className={`${bannerStyle} banner`}
        >
            <p>banner</p>
            <p>{bannerWidth}x120</p>
        </div>
    )
}
