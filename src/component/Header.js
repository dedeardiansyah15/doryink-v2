import React from "react";
import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <h1>Dory Ink Studio Bali</h1>
            <nav>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );



}

export default Header;