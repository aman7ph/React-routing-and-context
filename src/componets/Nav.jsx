import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';
import Logo from './Logo';
const Nav = () => {
    return (
        <nav className={style.nav}>
            <Logo />
            <ul>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={style.ctaLink}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
