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
        };
      
          window.addEventListener('mousemove', handleMouseMove);
      
          return () => {
            window.removeEventListener('mousemove', handleMouseMove);
          };
    }, []);

    return (
        <>
            <main className='hero w-screen h-screen relative'>
                <Stars stars={stars} />
                <div className='flex flex-col pt-20 items-center justify-center lg:flex-row lg:pt-44 lg:px-32 lg:justify-between z-20 relative px-6'>
                    <div className='left-hero basis-3/6 flex flex-col items-center lg:items-start'>
                        <h1 className='gradient-text text-3xl pb-6' data-aos="fade-right">Feng Zhang</h1>
                        <img data-aos="fade-zoom-in" data-aos-offset="200" src={feng} alt='feng headshot at e7' className='w-1/2 h-fit aspect-square max-h-80 rounded-full object-cover'></img>
                        <h3 className='typewriter text-center text-2xl pt-8' data-aos="fade-right" data-aos-delay="1000">Software Engineer</h3>
                        <h5 className='text-base pt-4 text-center' data-aos="fade-right" data-aos-delay="2000">Hello, I'm a first year CS student at the University of Waterloo. I'm passionate about all things surrounding web development and Machine Learning, and I am constantly looking for new opportunities to improve my skills!</h5>
                    </div>
                    {/* <div className='right-hero basis-2/6 flex justify-center items-center'>
                        <img data-aos="fade-zoom-in" data-aos-offset="200" src={feng} alt='feng headshot at e7' className='w-fit h-fit aspect-square max-h-80 rounded-full object-cover'></img>
                    </div> */}
                </div>
                <img className='foreground w-full absolute z-10 max-h-screen object-cover top-2/3
                                ' src={foreground} data-aos="fade-in" alt='tree foreground'></img>
            </main>
        </>
    )
}

export default Hero