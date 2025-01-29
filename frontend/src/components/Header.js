import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>My Blog</h1>
            <nav>
                <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                <NavLink to="/create" activeClassName="active-link">Create Post</NavLink>
                <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                <NavLink to="/signup" activeClassName="active-link">Signup</NavLink>
            </nav>
        </header>
    );
};

export default Header;
