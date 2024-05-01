import React from 'react';

function Projects({ projectsData }) {
    if (!projectsData) {
        return <div>No Projects data.</div>;
      }
    return (
        <div>
        <h2>Projects</h2>

        {projectsData.map((project, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul>
                {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
                ))}
            </ul>

            <a href={project.link}>View Project</a>
            </div>
        ))}
        </div>
    );
}

export { Projects };