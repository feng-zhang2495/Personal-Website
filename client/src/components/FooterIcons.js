import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const FooterIcons = ({ link, icon }) => {
    return (
        <Link target="_" to={link}>
            <FontAwesomeIcon icon={icon} className='cursor-pointer hover:scale-110' size='xl'/>
        </Link>
    )
}

export default FooterIcons