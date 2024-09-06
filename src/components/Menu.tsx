import { Link } from "react-router-dom";
import { DivNavs } from "../styled";
import { useState } from 'react';
import logoMenu from "../assets/img/Logo-nav.png"

export default function Menu() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <>
            <DivNavs>
                <div className="Nav_Celular">
                    <nav>
                        <div className="menu-hamburger">
                            <img id="logocarro" src={logoMenu} alt="logo" className="mostrar"/>
                            <button 
                                id="hamburger-menu" 
                                className="hamburger" 
                                onClick={toggleMenu}
                            >
                                ☰
                            </button>
                        </div>
                        <ul 
                            id="nav-links" 
                            className={`nav-links ${menuActive ? 'active' : ''}`}
                        >
                            <button 
                                id="close-menu" 
                                className="close-menu" 
                                onClick={closeMenu}
                            >
                                ✖
                            </button>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/Chatbot'>ChatBot</Link></li>
                            <li><Link to='/sobre-nos'>Sobre Nós</Link></li>
                            <li><Link to='/login'>Login</Link></li>

                        </ul>
                    </nav>
                </div>

                <nav className="NavHome">
                    <img className="logo" src={logoMenu} alt="logo"/>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/chatbot'>ChatBot</Link></li>
                        <li><Link to='/sobre-nos'>Sobre Nós</Link></li>
                        <li><Link to='/login'>Login</Link></li>

                    </ul>
                </nav>
            </DivNavs>
        </>
    );
}
