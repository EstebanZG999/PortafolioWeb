// Header.jsx
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
