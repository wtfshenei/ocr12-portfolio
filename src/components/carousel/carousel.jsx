import React, {useState} from 'react';
import AngleLeft from "../utils/icons/angles/angleLeft";
import AngleRight from "../utils/icons/angles/angleRight";

const Carousel = ({ pictures, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstImg = currentIndex === 0
        const newIndex = isFirstImg ? pictures.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastImg = currentIndex === pictures.length - 1
        const newIndex = isLastImg ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className={className}>
            <button className={'carousel-button left'} onClick={goToPrevious}><AngleLeft /></button>
            {pictures && pictures.length > 0 && (
                <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`}/>
            )}
            <button className={'carousel-button right'} onClick={goToNext}><AngleRight /></button>
        </div>
    );
};

export default Carousel;