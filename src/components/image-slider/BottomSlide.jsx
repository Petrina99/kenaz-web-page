import './styles/bottomSlide.scss';

export const BottomSlide = ({ slides, current }) => {

    return (
        <>
            <div className='zoom-in'></div>
            <img src={slides[current].bigPicture} />
        </>
    )
}
