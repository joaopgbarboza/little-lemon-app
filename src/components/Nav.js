import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Reservations from './Reservations';
import App from '../App';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav" id="myTopnav">
            <img className='logo' src={logo} alt='Little Lemon Logo' />
            
            <ul className={isOpen ? "open" : ""}> 
                <li>
                    <Link to='/' element={<App/>}>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Menu</Link>
                </li>
                <li>
                    <Link to='/reservations' element={<Reservations/>}>Reservations</Link>
                </li>
                <li>
                    <Link to='/'>Order Online</Link>
                </li>
                <li>
                    <Link to='/'>Login</Link>
                </li>
            </ul>

            <a href="#" className="icon" onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
            </a>
        </nav>
    );
};

export default Nav;
