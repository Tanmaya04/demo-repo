import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#" className="logo">Labwear OS</a>
        <ul>
          <li>
            <a href="#">Solutions</a>
            {/* Submenu for Solutions - can be a separate component later */}
            <ul className="sub-menu"> {/* Matched class from original CSS for nav submenus */}
              <li><a href="#">For Brands</a></li>
              <li><a href="#">For Merchandise</a></li>
              <li><a href="#">For Enterprise</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Pricing</a>
            <ul className="sub-menu">
              <li><a href="#">Plans</a></li>
              <li><a href="#">Price Calculator</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Capabilities</a>
            <ul className="sub-menu">
              <li><a href="#">Basic Program</a></li>
              <li><a href="#">Knitwear Program</a></li>
              <li><a href="#">Activewear Program</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Resources</a>
            <ul className="sub-menu">
              <li><a href="#">How it works</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">LabReport</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </li>
          <li><a href="#">Blanks</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
