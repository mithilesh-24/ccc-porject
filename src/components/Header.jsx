import React, { useState } from "react";
import "../styles/header.css";
import WebLogo from '../assets/Web_Logo.png';

export default function Header() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "About Us", "Planters", "Contact"];

  return (
    <header className="site-header">
      <div className="header-container">
        <img src={WebLogo} alt="Lush Logo" className="logo" />

        {/* Right-aligned nav */}
        <div className="right-side">
          <nav className="nav-links">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className={active === link ? "active" : ""}
                onClick={() => setActive(link)}
              >
                {link}
              </a>
            ))}
          </nav>

          <a href="#" className="call-btn">Call Us</a>
        </div>
      </div>
    </header>
  );
}
