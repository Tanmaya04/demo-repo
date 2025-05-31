import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Legal Notice</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Resources</h5>
          <ul>
            <li><a href="#">FAQ</a></li>
            {/* Corrected PDF links as per original HTML */}
            <li><a href="_files/ugd/ae1eb4_4128b452ebe94d38bbcd8955ffd5d16c.pdf" target="_blank" rel="noopener noreferrer">Download Product Guide</a></li>
            <li><a href="_files/ugd/ae1eb4_522db53b16f843dfbe8e1bfdb4a79538.pdf" target="_blank" rel="noopener noreferrer">Download Knitwear Guide</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Contact</h5>
          <p>Our team is available Mon - Fri 9am - 7pm.</p>
          <p><a href="mailto:info@labwearstudios.com">info@labwearstudios.com</a></p>
        </div>
        <div className="footer-column">
          <h5>Follow Us</h5>
          <ul className="social-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">X</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Labwear Studios Clone. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
