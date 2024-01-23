import React from 'react'
import { useState, useEffect } from 'react'

const Stars = () => {
    const numStars = 400;
    const starColors = []
    const [mousePosition, setMousePosition] = useState({x : 0, y : 0})

    const stars = Array.from({ length: numStars }, (_, index) => {
        const generateSize = () => {
            let size = Math.random() * 5
            while (size < 2) {
                size = Math.random() * 5;
            }
            return size;
        }

        const getRandomColor = () => {
            const baseColor = Math.floor(Math.random() * 50); 
            const yellowTint = Math.floor(Math.random() * 50);
            return `rgb(${255 - baseColor},${255 - baseColor},${255 - baseColor + yellowTint})`;
        };

        const style = {
            backgroundColor: getRandomColor(),
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${generateSize()}px`,
            height: `${generateSize()}px`,
        };
        return <div key={index} className="star" style={style}></div>;
    });

    return <div className="stars">{stars}</div>;
}

export default Stars