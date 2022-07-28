import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <a href="#">Logo</a>
                    </div>
                    <input type="checkbox" name="" id="nav-check" />
                    <label for="nav-check" className='nav-toggler'>
                        <span></span>
                    </label>
                    <div className="nav">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;