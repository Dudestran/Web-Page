import React from 'react'

const Footer = () => {
   return (
    <footer className="footer">
      <div className="footer-wrapper">

        <div className="footer-col">
          <h2 className="footer-brand">Awareness</h2>
          <p className="footer-text">
            Saving Lives
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Links</h3>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">Services</a></li>
            <li><a href="#" className="footer-link">About</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Social</h3>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Instagram</a></li>
            <li><a href="#" className="footer-link">Twitter / X</a></li>
            <li><a href="#" className="footer-link">LinkedIn</a></li>
            <li><a href="#" className="footer-link">YouTube</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} WebBrand • All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer
