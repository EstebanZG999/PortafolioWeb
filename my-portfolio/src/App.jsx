import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './styles/App.css';
import './styles/animations.css';

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    };

    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.cursor');
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="cursor"></div> 
      <main className="main-content">
        <Hero />
        <div className="content">
          <section id="about" className="fade-in hover-effect">
            <About />
          </section>
          <section id="experience" className="fade-in hover-effect">
            <Experience />
          </section>
          <section id="projects" className="fade-in">
            <Projects />
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
