import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className='navbarContainer'>
                    <div className="navbarLeftContainer">
                        <Link to="/">
                            <img src="./Logo.png"/>
                        </Link>
                    </div>

                    <div className="navbarRightContainer">
                        <Link to="/materials">Materials</Link>
                        <Link to="/buyequipment">Buy Equipment</Link>
                        <Link to="/repairequipment">Repair Equipment</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;