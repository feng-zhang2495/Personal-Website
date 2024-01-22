import React from 'react'
import feng from '../assets/img/feng.JPG'

const Hero = () => {
    return (
        <>
            <main className='hero h-screen w-screen'>
                <div className='flex flex-row pt-44 px-32 justify-between'>
                    <div className='left-hero basis-3/6 flex flex-col items-start'>
                        <h1 className='gradient-text'>Feng Zhang</h1>
                        <h3 className='typewriter pt-8'>Software Engineer</h3>
                        <h5 className='text-lg pt-4'>Hello, I'm a first year CS student at the University of Waterloo. I'm passionate about all things surrounding web development and Machine Learning, and I am constantly looking for new opportunities to improve my skills!</h5>
                    </div>
                    <div className='right-hero basis-2/6 flex justify-center items-center'>
                        <img src={feng} alt='feng headshot at e7' className='w-fit h-fit aspect-square max-h-80 rounded-full object-cover'></img>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero