import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'TA web project that demonstrates the fundamental principles of HTML. It showcases the story of the RPG game in the world of Aetheria.',
      link: 'https://tiburoncin.lat/22119/Html/index.html',
      previewImage: '../../public/images/Project 1 Html Web.jpeg',
      skills: ['HTML']
    },
    {
      title: 'Project 2',
      description: 'This project is built using React and Next.js, incorporating HTML, CSS, and JavaScript. It is a blog showcasing the PR numbers of my and my friends.',
      link: 'https://web-proyecto1.vercel.app/',
      previewImage: '../../public/images/BlogWeb.jpeg', 
      skills: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Project 3',
      description: 'A project focused on the styling capabilities of CSS. It is batman made from only CSS.',
      link: 'https://tiburoncin.lat/22119/Lab4WebV2/html/index.html',
      previewImage: '../../public/images/BatmanWeb.jpeg', 
      skills: ['CSS']
    }
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-container">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-item">
            <div className="project-content">
              <img src={project.previewImage} alt={`Vista previa de ${project.title}`} className="project-preview" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="view-project">View Project</span>
              <div className="skills">
                {project.skills.map((skill, idx) => (
                  <span key={idx} className="skill">{skill}</span>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
