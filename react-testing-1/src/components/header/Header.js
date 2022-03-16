import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='navigation-bar'>
            <div className='topnav'>
                <a className='site-name'> Engine Ring</a>
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    );
}

export default Header;
