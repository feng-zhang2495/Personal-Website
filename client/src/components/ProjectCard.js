import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const ProjectCard = ({ title, subtitle, desc, img, github, website, icons}) => {
    return (
        <section className='project-card my-8 py-4 px-6 rounded-2xl flex flex-col justify-between
                            sm:py-8 px-10
                            xl:' data-aos="fade-up-right">
            <div className='top'>
                <h4 className=''>{title}</h4>
                <h6 className='pb-6 font-bold opacity-70
                               xl:text-lg 2xl:text-xl'>{subtitle}</h6>
                <img className='object-cover w-full rounded-lg max-h-80' src={img} alt='project demo'></img>
                <p className='pt-6 opacity-70 xl:text-lg 2xl"text-xl'>{desc}</p> 
                
                {icons && (
                    <div className='technologies flex flex-row pt-6 items-center gap-3 flex-wrap'>
                        {icons.map((icon, index) => {
                            return <img key={index} src={icon} className='h-8' alt='icon of technology used'></img>
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