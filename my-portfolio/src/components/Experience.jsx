import React from 'react';
import '../styles/Experience.css';
import '../styles/animations.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Computer Science Engineering Student',
      company: 'Universidad del Valle de Guatemala',
      timeframe: '2022 — Present',
      description: 'All my digital experiences in web development during my career.',
      skills: ['JavaScript', 'Aws', 'HTML & SCSS', 'React', 'Next.js', 'React Native', 'PM2', 'Vite', 'Node.js', 'Docker']
    }
  ];

  return (
    <div className="experience hover-effect">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title} · <span>{exp.company}</span></h3>
          <p className="timeframe">{exp.timeframe}</p>
          <p>{exp.description}</p>
          <div className="skills">
            {exp.skills.map((skill, idx) => (
              <span key={idx} className="skill">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
