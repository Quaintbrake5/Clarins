/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import './styles.css';

function VerticalHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <button className="hamburger" onClick={handleToggle}>
        <span className="hamburger-icon"></span>
      </button>
      <ul className={`menu ${isOpen? 'open' : ''}`}>
      </ul>
    </div>
  );
}

export default VerticalHamburgerMenu;
