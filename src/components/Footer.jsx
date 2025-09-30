import React from 'react';
import '../styles/Footer.css'; // Import the separate CSS file

// SVG icons for social media
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

function Footer() {
  const navLinks = ['Home', 'About Us', 'Plants', 'Delivery', 'Blog', 'Contact Us'];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-title">Feel free to contact us</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com/_mithilesh_24_/" className="social-icon-link" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" className="social-icon-link" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="#" className="social-icon-link" aria-label="Twitter">
            <TwitterIcon />
          </a>
        </div>
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            {navLinks.map(link => (
              <li key={link}>
                <a href="#" className="footer-nav-link">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="copyright-bar">
        Copyright &copy; 2021 Lush. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
