import React from 'react';
import { Link } from 'react-router-dom';
import '../NavbarRoute/NavbarRoute.css';


const NavbarRoute = () => {
    return (
        <div>
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
                        <Link to="/login"><button>Login</button></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavbarRoute;