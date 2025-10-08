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
                    <button  className='navbut'><a href='#'>Call</a></button>
                </div>
            </div>
            <div className='textcontent'>
                <h1>Nature's Beauty Delivered to You</h1>
                <p>Nature's beauty is just a click away with our online flower and plant shop. We offer a<br/>wide variet of flower that will a touch of nature to your home!</p>
                <div className='but'>
                    <button className='but1'>Book now</button>
                    <button className='but2'>Watch Video</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Header;
