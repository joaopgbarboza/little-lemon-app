import React from "react";
import logo from "../assets/logo-little-lemon.png"


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                    <div className="footer-img">
                        <img  src={logo} alt="logo"/>
                    </div>
                    
                    <div className="footer-nav">
                        <h3>Navigation Bar</h3>
                        <ul>
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/home">About</a>
                            </li>
                            <li>
                                <a href="/home">Menu</a>
                            </li>
                            <li>
                                <a href="/home">Reservations</a>
                            </li>
                            <li>
                                <a href="/home">Order Online</a>
                            </li>
                            <li>
                                <a href="/home">Login</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <ul>
                            <li>
                                Address
                            </li>
                            <li>
                                Phone Number
                            </li>
                            <li>
                                Email
                            </li>
                        </ul>
                    </div>
                    <div className="footer-socials">
                        <h3>Social Media Links</h3>
                    </div>
                    
            </div>
            <div className="footer-copyright">
                <p>All rights reserved - Little Lemon ® 2025</p>
            </div>
        </div>
    )
}

export default Footer;