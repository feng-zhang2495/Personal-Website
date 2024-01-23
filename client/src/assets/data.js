const fs = require('fs')

// GENERATE RANDOM STARS
const stars = Array.from({ length: 400 }, (_, index) => {
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
        left: `${Math.random() * 140 - 40}%`,
        top: `${Math.random() * 140 - 40}%`,
        width: `${generateSize()}px`,
        height: `${generateSize()}px`,
    };
    return style;
});

fs.writeFile("stars.json", JSON.stringify(stars), (err, data) => {

})