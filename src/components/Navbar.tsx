import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return(
        <nav className="navbar">
            <div className="logo">Router Example:</div>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/settings">Settings</NavLink>
                <NavLink to="/user/1">User</NavLink>
                <NavLink to="/products">Products</NavLink>
            </div>
        </nav>
    );
};