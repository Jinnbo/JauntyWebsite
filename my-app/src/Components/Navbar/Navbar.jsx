import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className='navbarContainer'>
                    <Link to="/">Home (Landing Page)</Link>
                    <Link to="/materials">Materials</Link>
                    <Link to="/buyequipment">Buy Equipment</Link>
                    <Link to="/repairequipment">Repair Equipment</Link>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;