import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    return (
        <nav className="navigation container">
            <div className="nav-links">
                <Link
                    to="/"
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                    Inicio (Historia)
                </Link>
                <span className="nav-separator">|</span>
                <Link
                    to="/ilpostino"
                    className={`nav-link ${location.pathname === '/ilpostino' ? 'active' : ''}`}
                >
                    Il Postino
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;
