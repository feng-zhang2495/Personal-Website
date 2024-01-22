import React from 'react'
import ProjectCard from './ProjectCard'
import billify from '../assets/img/billify.png'
import blockXism from '../assets/img/blockxism.jpg'
import { faReact, faNode, faDocker, faJs, faPython} from '@fortawesome/free-brands-svg-icons'


const Projects = () => {
    const data = [
        {
            title: "Billify",
            subtitle: "An app to transform practitioners' billing workflow",
            desc: "Billify is a program that utilizes Google Cloud's Healthcare Natural Langauge Processing API to identify keywords and context from SOAP notes. It cross references the keywords it finds with a MongoDB database of over 6500 official billing codes, saving upwards of 20 minutes of time on billing tasks!",
            img: billify,
            icons: [faNode, faReact, faDocker, faJs, faPython],
            github: 'https://github.com/fengzhang789/Billify'
        },
        {
            title: "BlockXism",
            subtitle: "A safer version of the Ethereum Blockchain",
            desc: "BlockXism is an attempt at placing more transparency in the blockchain ecosystem, through a simple verification system. It consists of (1) a self-authenticating service, (2) a ledger of verified users, and (3) rules for how verified and unverified users interact.",
            img: blockXism,
            icons: [faNode, faReact, faDocker, faJs, faPython]
        },
    ]

    return (
        <section className='projects w-screen'>
            <div className='px-32 py-12'>
                <h2 className='text-center py-6'>Projects</h2>
                
                <article className='project-card-holder flex flex-row gap-16 '>
                    {data.map((obj) => {
                        return <ProjectCard title={obj.title} desc={obj.desc} subtitle={obj.subtitle} img={obj.img} icons={obj.icons} github={obj.github}></ProjectCard>
                    })}
                </article>
            </div>
        </section>
    )
}

export default Projects