import React from "react";
import '../styles/Header.css'

function Header() {
    return (
        <>
        <div className='header'>
            <div className='hero'>
                <img src='/Web_Logo.png' alt="Logo" className="logo"/>
                <div className='navlink'>
                    <a href='#' className='nav'>Home</a>
                    <a href='#' className='nav'>About-Us</a>
                    <a href='#' className='nav'>Services</a>
                    <a href='#' className='nav'>Planters</a>
                    <a href='#' className='nav'>Contact</a>
                    <a href='#' className='navbut'>Call</a>
                </div>
            </div>
            <div className='textcontent'>
                <h1>NATURE BEAUTY</h1>
            </div>
        </div>
        </>
    );
}
export default Header;
