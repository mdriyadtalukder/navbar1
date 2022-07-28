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
                    <input type="checkbox"  id="nav-check" />
                    <label for="nav-check" className='nav-toggler'>
                        <span></span>
                    </label>

                    <div className="nav">
                        <ul>
                            <li><a href="#" className='active'>Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Servises</a></li>
                            <li><a href="#">Porfolio</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;