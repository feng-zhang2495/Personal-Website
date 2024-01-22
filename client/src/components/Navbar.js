import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Navbar = () => {
    return (
        <div className='navbar flex flex-row justify-between px-32 py-5'>
            <header className='inline grow w-1/3 text-left'>
                <h1 className='text-xl inline'>Feng Zhang</h1>
            </header>
            
            <nav className='center-nav'>
                <ul className='inline-flex flex-row grow w-1/3 justify-center gap-x-6 text-xl'>
                    <li className='inline'>Home</li>
                    <li className='inline'>Projects</li>
                </ul>
            </nav>
            
            <div className='socials grow w-1/3 flex flex-row justify-end gap-x-6'>
                <FontAwesomeIcon icon={faGithub} size='2x' inverse/>
                <FontAwesomeIcon icon={faLinkedin} size='2x' inverse/>
            </div>
        </div>
    )
}

export default Navbar