import React from 'react';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
