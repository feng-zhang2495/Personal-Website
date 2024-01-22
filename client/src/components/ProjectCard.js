import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProjectCard = ({ title, subtitle, desc, img, github, website, icons}) => {
    return (
        <div className='project-card my-8 py-8 px-12 rounded-2xl hover:scale-105 duration-300 basis-1/2'>
            <h4>{title}</h4>
            <h6 className='pb-6 font-bold opacity-70'>{subtitle}</h6>
            <img src={img} alt='project demo' className='object-fit w-full rounded-lg'></img>
            <p className='pt-6 opacity-70'>{desc}</p> 
            
            <div className='technologies flex flex-row pt-6 items-center gap-3'>
                {icons && icons.map((icon) => {
                    return <FontAwesomeIcon icon={icon} size='2xl' inverse/>
                })}
            </div>

            {(github || website) && (
                <div className='project-links'>
                    {github && (
                        <div></div>
                    )}
                </div>
            )}
            
        </div>
    )
}

export default ProjectCard