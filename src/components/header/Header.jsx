import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../Img1.jpg'
import HeaderSocials from "./HeaderSocials";
const Header = () =>{
    return(
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Pawan Kumar</h1>
                <h5 className="text-light">Computer Science Enthusiast </h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={ME} alt="ME" />
                </div>
                <a href="#contact" className="scrol__down" >Scroll Down</a>
            </div>
        </header>
    )
}
export default Header