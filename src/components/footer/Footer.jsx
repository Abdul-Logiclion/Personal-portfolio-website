import React from "react";
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {RiMetaLine} from 'react-icons/ri'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () =>{
    return(
        <footer>
            <a href="#" className="footer__logo">Abdul Jabar Rahimoon</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#certificates">Certificates</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="#" target="_blank"><FaFacebookF/></a>
                <a href="#"target="_blank"><FiInstagram/></a>
                <a href="#"target="_blank"><RiMetaLine/></a>
                <a href="#"target="_blank"><BsLinkedin/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Abdul Jabar. All Rights Reserved.</small>
            </div>
        </footer>
    )
}
export default Footer