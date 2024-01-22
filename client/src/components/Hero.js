import React from 'react'

const Hero = () => {
    return (
        <main className='hero h-screen w-screen'>
            <div className='flex flex-row'>
                <div className='left-hero basis-50 pt-44 px-44'>
                    <h1 className='gradient-text text-7xl'>Feng Zhang</h1>
                </div>
                <div className='right-hero basis-50'></div>
            </div>
        </main>
    )
}

export default Hero