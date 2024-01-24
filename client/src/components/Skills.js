import React from 'react'
import c from '../assets/img/c.png'
import docker from '../assets/img/docker.png'
import express from '../assets/img/expressjs.png'
import git from '../assets/img/git.png'
import js from '../assets/img/javascript.png'
import mongodb from '../assets/img/mongodb.png'
import node from '../assets/img/nodejs.png'
import processing from '../assets/img/processing.svg'
import python from '../assets/img/python.png'
import react from '../assets/img/react.png'
import tensorflow from '../assets/img/tensorflow.png'

const data = [
    {
        img: c,
    },
    {
        img: docker,
    },
    {
        img: express,
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
]

const Skills = () => {
    return (
        <section className='skills main-bg flex flex-col px-32 py-12'>
            <h2 data-aos="zoom-in" className='text-center py-6'>Skills</h2>
        </section>
    )
}

export default Skills