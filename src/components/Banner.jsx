import './styles/banner.scss';

export const Banner = ({ bannerWidth, bannerHeight }) => {

    return (
        <div 
            className='banner' 
            style={{ width: `${bannerWidth}px`, height: `${bannerHeight}px` }}
        >
            <p>banner</p>
            <p>{bannerWidth}x{bannerHeight}</p>
        </div>
    )
}
