import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Online Referral Platform</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
        </header>
    );
};

export default Header;
