import React, { useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Esteban Zambrano</h1>
        <p>Computer Science Engineer</p>
        <p>I develop high-quality, engaging, and accessible web applications.</p>
        <div className="social-icons">
          <a href="https://github.com/EstebanZG999" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" className="social-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/esteban-zambrano-b11b2022b/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" className="social-icon"/>
          </a>
          <a href="https://www.youtube.com/channel/UCQh1fmvys0sLCzqoMfWVmlg" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube Logo" className="social-icon"/>
          </a>
        </div>
        <button className="contact-button" onClick={toggleModal}>Contact Me</button>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <button className="modal-close-button" onClick={toggleModal}>×</button>
              <p>Contact me at: zam22119@uvg.edu.gt</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
