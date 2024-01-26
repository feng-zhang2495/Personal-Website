import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { pageContext } from '../App'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = (props) => {
    const page = useContext(pageContext)
    const [width, setWidth] = useState(window.innerWidth);
    const [navState, setNavState] = useState(false)

    function handleNavbarClick() {
        setNavState(!navState)
        console.log("hi")
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <>
            {isMobile ? (
                <>
                    <div className='navbar flex flex-row px-6 py-5 position-fixed bg-transparent z-40 opacity-90
                                    '>
                        <nav className='flex flex-row justify-between w-full'>
                            <button onClick={handleNavbarClick}><FontAwesomeIcon icon={faBars} size="2x" ></FontAwesomeIcon></button>
                            <div className='socials w-1/5 flex flex-row justify-end gap-x-6'>
                                <Link to='https://github.com/fengzhang789' className='hover:scale-105'><FontAwesomeIcon icon={faGithub} size='2x' inverse/></Link>
                                <Link to='https://www.linkedin.com/in/yunfengzhang/' className='hover:scale-105'><FontAwesomeIcon icon={faLinkedin} size='2x' inverse/></Link>
                            </div>
                        </nav>
                    </div>
                    {navState ? (
                        <div className='navbar fixed flex flex-col px-6 py-5 gap-12 bg-transparent z-40 w-screen h-screen'>
                            <nav className='flex flex-row justify-between w-full items-start'>
                                <button onClick={handleNavbarClick}><FontAwesomeIcon icon={faBars} size="2x" ></FontAwesomeIcon></button>
                                <div className='socials w-1/5 flex flex-row justify-end gap-x-6'>
                                    <Link to='https://github.com/fengzhang789' className='hover:scale-105'><FontAwesomeIcon icon={faGithub} size='2x' inverse/></Link>
                                    <Link to='https://www.linkedin.com/in/yunfengzhang/' className='hover:scale-105'><FontAwesomeIcon icon={faLinkedin} size='2x' inverse/></Link>
                                </div>
                            </nav>
                            <ul className='flex flex-col justify-start gap-y-6 text-lg items-center font-bold'>
                                <Link to="/"><li className='inline text-xl'>Home</li></Link>
                                <Link to="/#projects"><li className='inline text-xl'>Projects</li></Link>
                                <Link to="/blog"><li className='inline text-xl'>Blog</li></Link>
                            </ul>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </>
            ) : (
                <div className='navbar flex flex-row justify-between xl:px-32 py-5 lg:px-20 sm:px-12 items-center bg-transparent z-50 opacity-90
                                sm:text-lg
                                xl:text-lg'>
                    <nav className='center-nav basis-full flex items-center justify-start'>
                        <ul className='inline-flex flex-row grow w- justify-start gap-x-12 text-lg items-center font-bold'>
                            <Link to="/"><li className='inline'>Home</li></Link>
                            <a href="/#projects"><li className='inline'>Projects</li></a>
                            <Link to="/blog"><li className='inline'>Blog</li></Link>
                        </ul>
                    </nav>
                    
                    <div className='socials w-1/5 flex flex-row justify-end gap-x-6'>
                        <Link to='https://github.com/fengzhang789' className='hover:scale-105'><FontAwesomeIcon icon={faGithub} size='2x' inverse/></Link>
                        <Link to='https://www.linkedin.com/in/yunfengzhang/' className='hover:scale-105'><FontAwesomeIcon icon={faLinkedin} size='2x' inverse/></Link>
                    </div>
                </div>
            )}
        </>
        
        
    )
}

export default Navbar