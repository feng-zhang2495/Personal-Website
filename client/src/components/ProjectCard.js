import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ProjectCard = ({ title, subtitle, desc, img, github, website, icons}) => {
    return (
        <section data-aos="fade-up-right" className='project-card my-8 py-8 px-12 rounded-2xl hover:scale-105 duration-300 flex flex-col justify-between'>
            <div className='top'>
                <h4>{title}</h4>
                <h6 className='pb-6 font-bold opacity-70'>{subtitle}</h6>
                <img src={img} alt='project demo' className='object-cover w-full rounded-lg max-h-80'></img>
                <p className='pt-6 opacity-70'>{desc}</p> 
                
                {icons && (
                    <div className='technologies flex flex-row pt-6 items-center gap-3'>
                        {icons.map((icon, index) => {
                            return <FontAwesomeIcon key={index} icon={icon} size='2xl' inverse/>
                        })}
                    </div>
                )}
            </div>
            
            <div className='bottom'>
                {(github || website) && (
                    <div className='project-links pt-6'>
                        {github && (
                            <Link target="_blank" key={github} to={github} className='inline-flex flex-row gap-2 items-center repo-button px-6 py-2 rounded-full'>
                                <button className=''>Github</button>
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            </Link>
                        )}
                        {website && (
                            <Link target="_blank" key={website} to={website} className='inline-flex flex-row gap-2 items-center repo-button px-6 py-2 rounded-full'>
                                <button className=''>Website</button>
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProjectCard