import React from 'react';
import { Link } from 'react-router-dom';
import '../NavbarRoute/NavbarRoute.css';


const NavbarRoute = () => {
    const navStyle = {
        backgroundColor: '#60A3D9',
        fontWeight: 'bold'
    }
    return (
        <div style={navStyle}>
             <nav className="nav d-flex justify-content-end">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                    <li>
                        <Link to="/login"><button className="btn btn-outline-light">
                            Login
                            </button></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavbarRoute;