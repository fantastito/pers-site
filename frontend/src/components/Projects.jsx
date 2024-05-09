import React from 'react';

function Projects({ projectsData }) {
    if (!projectsData) {
        return <div className="text-center text-gray-600 text-xl">No Projects data.</div>;
      }
    return (
        <div className="p-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Projects</h2>

        {projectsData.map((project, index) => (
                <div key={index} className="mb-8 p-4 shadow-md rounded-lg bg-white flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">{project.title}</h3>
                        <a href={project.link} className="text-blue-500 hover:text-blue-700 underline self-center">GitHub</a> {project.liveUrl && <a href={project.liveUrl} className="text-blue-500 hover:text-blue-700 underline">Live site</a>}
                        <p className="text-gray-600 mb-4">{project.description}</p>

                        <ul className="flex flex-wrap gap-2">
                        {project.tech.map((tech, j) => (
                        <li key={j} className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700">{tech}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export { Projects };