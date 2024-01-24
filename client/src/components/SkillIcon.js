import React from 'react'

const SkillIcon = ({ data }) => {
    return (
        <img data-aos="fade-in" data-aos-duration="1000" className='logo h-24 inline-block mx-16' src={data.img} alt='Carousel of technology skill' style={data.styles}></img>
    )
}

export default SkillIcon