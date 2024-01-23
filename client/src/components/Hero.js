import React from 'react'
import feng from '../assets/img/feng.JPG'
import Stars from './Stars'
import foreground from '../assets/img/foreground.svg'
import data from '../assets/stars.json'
import { useState, useEffect } from 'react'

const Hero = () => {
    const [stars, setStars] = useState(data);
    const moveFactorY = 3;
    const moveFactorX = 3;
    // console.log(`Window height: ${window.innerHeight}`)
    

    useEffect(() => {
        const handleMouseMove = (event) => {
            setStars(stars.map((star, index) => {
                const originalLeft = parseFloat(star.left);
                const originalTop = parseFloat(star.top);

                console.log(`moving (${(window.innerWidth / 2 - event.clientY) / (window.innerWidth / 2) * moveFactorX}, ${(window.innerHeight / 2 - event.clientY) / (window.innerHeight / 2) * moveFactorY})`)
                const newLeft = originalLeft + (window.innerWidth / 2 - event.clientX) / (window.innerWidth / 2) * moveFactorX;
                const newTop = originalTop + (window.innerHeight / 2 - event.clientY) / (window.innerHeight / 2) * moveFactorY;
                return {
                    ...star,
                    left: `${newLeft}%`,
                    top: `${newTop}%`
                }
            }))
            // setMousePosition({ x: event.clientX, y: event.clientY });
        };
      
          window.addEventListener('mousemove', handleMouseMove);
      
          return () => {
            window.removeEventListener('mousemove', handleMouseMove);
          };
    }, []);

    return (
        <>
            <main className='hero w-screen'>
                <Stars stars={stars} />
                <div className='flex flex-row pt-44 px-32 justify-between z-20 relative'>
                    <div className='left-hero basis-3/6 flex flex-col items-start'>
                        <h1 className='gradient-text' data-aos="fade-right">Feng Zhang</h1>
                        <h3 className='typewriter pt-8' data-aos="fade-right" data-aos-delay="1000">Software Engineer</h3>
                        <h5 className='text-lg pt-4' data-aos="fade-right" data-aos-delay="2000">Hello, I'm a first year CS student at the University of Waterloo. I'm passionate about all things surrounding web development and Machine Learning, and I am constantly looking for new opportunities to improve my skills!</h5>
                    </div>
                    <div className='right-hero basis-2/6 flex justify-center items-center'>
                        <img data-aos="fade-zoom-in" data-aos-offset="200" src={feng} alt='feng headshot at e7' className='w-fit h-fit aspect-square max-h-80 rounded-full object-cover'></img>
                    </div>
                </div>
                <img src={foreground} data-aos="fade-in" className='foreground w-full relative z-10 max-h-screen object-cover' alt='tree foreground'></img>
            </main>
        </>
    )
}

export default Hero