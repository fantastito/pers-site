import React from 'react';

import githubMark from "../assets/githubMark.png"

function Projects({ projectsData }) {
    if (!projectsData) {
        return <div className="text-center text-gray-600 text-xl">No Projects data.</div>;
    }
    return (
        <div className="pt-32 px-4 pb-1">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Projects</h2>

            {projectsData.map((project, index) => (
                <div key={index} className="mb-8 p-4 border rounded-md border-gray-200 bg-white">
                    <div>
                        
                    <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-700 mr-4">{project.title}</h3>
                        <div className="flex items-center space-x-2">
                            <a href={project.link} className="inline-flex items-center justify-center rounded-full clip-[circle(50%_at_center)]">
                                <img src={githubMark} alt={`GitHub ${project.title} link`} className="w-6 h-6 object-cover transition-transform duration-300 transform hover:scale-110" />
                            </a>{project.liveUrl && <a href={project.liveUrl} className="inline-flex items-center justify-center text-2xl transition-transform duration-300 transform hover:scale-110">
                                🌐
                            </a>}
                        </div>
                    </div>
                        
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
