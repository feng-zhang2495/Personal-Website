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
            <main className='hero w-screen h-fit relative
                            sm:
                            lg:
                            xl:h-screen'>
                <Stars stars={stars} />
                <div className='flex flex-col py-20 items-center justify-center z-20 relative px-6
                                sm:px-16
                                xl:px-32 xl:h-full'>
                    <div className='hero-content basis-3/6 flex flex-col items-center
                                    lg:grid lg:grid-cols-8 lg:pb-44'>
                        <h1 className='gradient-text text-3xl pb-6
                                        sm:text-4xl
                                        xl:text-5xl' data-aos="fade-right">Feng Zhang</h1>
                        <img className='personal-photo w-1/2 h-fit aspect-square max-h-80 rounded-full object-cover
                                        sm:w-1/3
                                        lg:w-4/5 lg:max-h-screen lg:justify-self-end' data-aos="fade-zoom-in" data-aos-offset="200" src={feng} alt='feng headshot at e7'></img>
                        <h3 className='typewriter text-center text-2xl pt-8
                                        sm:text-3xl
                                        lg:text-start' data-aos="fade-right" data-aos-delay="1000">Software Engineer</h3>
                        <h5 className='paragraph text-base pt-4 text-center
                                       sm:text-lg
                                       lg:text-start
                                       xl:text-xl' data-aos="fade-right" data-aos-delay="2000">Hello, I'm a first year CS student at the University of Waterloo. I'm passionate about all things surrounding web development and Machine Learning, and I am constantly looking for new opportunities to improve my skills!</h5>
                    </div>
                </div>
                
                <img className='foreground w-full absolute z-10 max-h-screen object-cover -translate-y-full' src={foreground} alt='tree foreground'></img>
                
                
            </main>
        </>
    )
}

export default Hero