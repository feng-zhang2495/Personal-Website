import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../assets/RESUME.pdf'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import FooterIcons from './FooterIcons'

const Footer = () => {
    const iconLinkData = [
        {
            link: "mailto:feng.zhang1@uwaterloo.ca",
            icon: faEnvelope,
        },
        {
            link: "https://github.com/fengzhang789",
            icon: faGithub,
        },
        {
            link: resume,
            icon: faFile,
        },
    ]
    return (
        <footer className='footer flex flex-col justify-center items-center main-bg py-10 gap-3'>
            <div className='footer-icons flex flex-row gap-4'>
                {iconLinkData.map((item, index) => {
                    return <FooterIcons key={index} link={item.link} icon={item.icon}></FooterIcons>
                })}
            </div>
            <p>© {new Date().getFullYear()} Feng Zhang. All rights reserved.</p>
            <h6>
                Made with <Link to="https://react.dev/" target="_" className='underline text-blue-400'>React</Link>,{" "}
                <Link to="https://tailwindcss.com/" target='_' className='underline text-blue-400'>Tailwind</Link>,
                {" and lots of ❤️."}
            </h6>
        </footer>
    )
}

export default Footer