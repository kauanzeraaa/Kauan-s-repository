import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';

const Header = () => {

    const[Toggle, showMenu] = useState(false);


    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">
                    <img src={logo} alt="Logo" /> {/* Aqui está a mudança */}
                </a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="uil uil-home nav_icon"></i>Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link active-link">
                                <i className="uil uil-user nav_icon"></i>About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-file nav_icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#portfolio" className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i>Projects
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-message nav_icon"></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times-circle nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"> </i>    
                </div>
            </nav>
        </header>
    )
}

export default Header;