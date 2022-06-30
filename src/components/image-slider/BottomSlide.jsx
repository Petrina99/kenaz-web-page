import { useState } from 'react';

import './styles/bottomSlide.scss';

export const BottomSlide = ({ slides, current }) => {

    const [isZoom, setIsZoom] = useState(false);

    const handleZoom = () => {

        setIsZoom(true);
    }

    const handleZoomOut = () => {
        setIsZoom(false);
    }

    const Slide = () => {

        if (isZoom) {
            return <ZoomedIn />
        } else {
            return <ZoomedOut />
        }
    }

    const ZoomedIn = () => {
        return (
            <div className='bottom-slide-zoomed'>
                <img src={slides[current].bigPicture} />
                <div 
                    onClick={handleZoomOut}
                    className='close-img'
                >
                    X
                </div>
            </div>
        )
    }

    const ZoomedOut = () => {
        return (
            <div className='bottom-slide'>
                <div className='zoom-in' onClick={handleZoom}></div>
                <img src={slides[current].bigPicture} />
            </div>
        )
    }

    return (
        <Slide />
    )
}
