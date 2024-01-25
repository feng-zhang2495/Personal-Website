import React from 'react'
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

const data = [
    {
        img: c,
    },
    {
        img: docker,
    },
    {
        img: express,
        styles: {
            fill: "#FFFFFF"
        }
    },
    {
        img: git,
    },
    {
        img: js,
    },
    {
        img: mongodb,
    },
    {
        img: node,
    },
    {
        img: processing,
    },
    {
        img: python,
    },
    {
        img: react,
    },
    {
        img: tensorflow,
    },
    {
        img: html,
    },
    {
        img: css,
    },
    {
        img: tailwind,
    },
]

const carousel = [...data, ...data]

const Skills = () => {
    return (
        <section className='skills main-bg py-12 pb-20'>
            <h2 data-aos="zoom-in" className='text-center py-6'>Skills</h2>
            <div className='infinite-carousel'>
                <div className='carousel-row inline-block py-6'>
                    {carousel.map((item, index) => {
                        return <SkillIcon data={item} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills