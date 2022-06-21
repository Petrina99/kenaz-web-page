import './styles/bottomSlide.scss';

export const BottomSlide = ({ slide }) => {

    return (
        <>
            <div className='zoom-in'></div>
            <img src={slide.bigPicture} />
        </>
    )
}
