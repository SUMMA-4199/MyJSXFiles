import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../pages/footer.css'

export const Footer = () => {
    return (
        <>
            <footer>

                <p>Metaverse Association</p>
                <a href="">
                    <p><FontAwesomeIcon icon={faInstagram} />Instagram </p>
                </a>

                <a href=''>
                    <p><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</p>
                </a>


            </footer>
        </>
    )
}
