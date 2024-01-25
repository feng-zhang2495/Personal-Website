import React from 'react'
import ProjectCard from './ProjectCard'
import billify from '../assets/img/billify.png'
import blockXism from '../assets/img/blockxism.jpg'
import graphEasy from '../assets/img/graphEasy.jpg'
import atomSim from '../assets/img/atomSim.jpg'
import c from '../assets/img/c.png'
import docker from '../assets/img/docker.png'
import express from '../assets/img/express.svg'
import git from '../assets/img/git.png'
import js from '../assets/img/javascript.png'
import mongodb from '../assets/img/mongodb.png'
import node from '../assets/img/nodejs.png'
import processing from '../assets/img/processing.svg'
import python from '../assets/img/python.png'
import react from '../assets/img/react.png'
import tensorflow from '../assets/img/tensorflow.png'
import SkillIcon from './SkillIcon'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import tailwind from '../assets/img/tailwind.png'
import solidity from '../assets/img/solidity.svg'


const Projects = () => {
    const data = [
        {
            title: "Billify",
            subtitle: "An app to transform practitioners' billing workflow",
            desc: "Billify is a program that utilizes Google Cloud's Healthcare Natural Langauge Processing API to identify keywords and context from SOAP notes. It cross references the keywords it finds with a MongoDB database of over 6500 official billing codes, saving upwards of 20 minutes of time on billing tasks!",
            img: billify,
            icons: [node, react, docker, js, python, express, mongodb],
            github: 'https://github.com/fengzhang789/Billify'
        },
        {
            title: "BlockXism",
            subtitle: "A safer version of the Ethereum Blockchain",
            desc: "BlockXism is an attempt at placing more transparency in the blockchain ecosystem, through a simple verification system. It consists of (1) a self-authenticating service, (2) a ledger of verified users, and (3) rules for how verified and unverified users interact.",
            img: blockXism,
            icons: [node, react, js, solidity, express, mongodb],
            github: 'https://github.com/fengzhang789/BlockXism'
        },
        {
            title: "GraphEasy",
            subtitle: "A graphing calculator with tangent line visualization",
            desc: "GraphEasy is a graphing calculator made in Processing that comes with tangent line visualization capabilities. It supports implicit function graphing with common math functions and constants such as sin, cos, tan, e, ln, etc. It implements the shunting algorithm to calculate infix values and incorporates hash maps to save and avoid recalculation.",
            img: graphEasy,
            icons: [processing],
            github: 'https://github.com/fengzhang789/GraphEasy'
        },
        {
            title: "Atom Simulation",
            subtitle: "A realistic simulation of charged atoms",
            desc: "Atom Simulation is a realistic physics simulation using Coloumb's law, simulating ionic bonds through the formation of molecules when atoms of opposite charges collide and add up to zero. This simulation is of the formation of Aluminum Cloride, AlCl3.",
            img: atomSim,
            icons: [processing],
            github: 'https://github.com/fengzhang789/Atom-Simulation'
        },
    ]

    return (
        <section className='projects w-screen'>
            <div className='px-6 py-12 
                            sm:px-16
                            lg:px-56
                            xl:px-32'>
                <h2 data-aos="zoom-in" className='text-center py-6
                                                  lg:text-4xl' id="projects">Projects</h2>
                <article className='project-card-holder flex flex-col flex-wrap justify-stretch items-stretch
                                    lg:gap-6
                                    xl:flex-row xl:justify-between'>
                    {data.map((obj) => {
                        return <ProjectCard key={obj.subtitle} title={obj.title} desc={obj.desc} subtitle={obj.subtitle} img={obj.img} icons={obj.icons} github={obj.github}></ProjectCard>
                    })}
                </article>
            </div>
        </section>
    )
}

export default Projects