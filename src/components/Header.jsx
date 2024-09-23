import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header className="header">
            <h1>Samsung</h1>
            <nav>
                <ul>
                    <li><a href="#products">Produk</a></li>
                    <li><a href="#about">Tentang</a></li>
                    <li><a href="#contact">Kontak</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;