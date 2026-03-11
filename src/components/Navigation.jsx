import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    return (
        <nav className="navigation container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Il Postino Logo" style={{ height: '50px' }} />
            </Link>
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
