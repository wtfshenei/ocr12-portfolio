import React, {useState} from 'react';

const Carousel = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstImg = currentIndex === 0
        const newIndex = isFirstImg ? projects.content.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastImg = currentIndex === projects.content.length - 1
        const newIndex = isLastImg ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div>
            <button onClick={goToPrevious}>P</button>
            <img src={projects.content[currentIndex].pictures} alt="Test"/>
            <button onClick={goToNext}>S</button>
        </div>
    );
};

export default Carousel;