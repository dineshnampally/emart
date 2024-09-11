import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import Login from './buttons/Login';
import Signup from './buttons/Signup';

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // Hide navbar on scroll down
            } else {
                setShowNavbar(true); // Show navbar on scroll up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg fixed-top shadow-md bg-dark ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}
                style={{ transition: 'transform 0.3s ease' }}
            >
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-lg font-bold text-white" to="/">APPLE MART</NavLink>
                    <button
                        className="navbar-toggler custom-toggler" // Custom class to override default color
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'text-warning' : 'text-white'} hover:text-warning`}
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'text-warning' : 'text-white'} hover:text-warning`}
                                    to="/products"
                                >
                                    Product
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'text-warning' : 'text-white'} hover:text-warning`}
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'text-warning' : 'text-white'} hover:text-warning`}
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <Login />
                            <Signup />
                            <CartBtn />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
