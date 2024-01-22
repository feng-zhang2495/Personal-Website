import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { pageContext } from '../App'


const Navbar = (props) => {
    const page = useContext(pageContext)

    return (
        <div className='navbar flex flex-row justify-between xl:px-32 py-5 lg:px-20 sm:px-12 items-center bg-transparent z-10'>
            <nav className='center-nav basis-full flex items-center justify-start'>
                <ul className='inline-flex flex-row grow w- justify-start gap-x-12 text-lg items-center font-bold'>
                    <li className='inline'>Home</li>
                    <li className='inline'>Projects</li>
                    <li className='inline'>Blog</li>
                    <li className='inline'>Contact Me</li>
                </ul>
            </nav>
            
            <div className='socials w-1/5 flex flex-row justify-end gap-x-6'>
                <Link to='https://github.com/fengzhang789' className='hover:scale-105'><FontAwesomeIcon icon={faGithub} size='2x' inverse/></Link>
                <Link to='https://www.linkedin.com/in/yunfengzhang/' className='hover:scale-105'><FontAwesomeIcon icon={faLinkedin} size='2x' inverse/></Link>
            </div>
        </div>
    )
}

export default Navbar