import React from 'react';

function Projects({ projectsData }) {
    if (!projectsData) {
        return <div className="text-center text-gray-600 text-xl">No Projects data.</div>;
    }
    return (
        <div className="pt-4 px-4 pb-1">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Projects</h2>

            {projectsData.map((project, index) => (
                <div key={index} className="mb-8 p-4 border rounded-md border-gray-200 bg-white">
                    <div>
                        
                        <div className="flex items-center mb-2">
                            <h3 className="text-xl font-semibold text-gray-700 mr-4">{project.title}</h3>
                            <div>
                                <a href={project.link} className="text-blue-500 hover:text-blue-700 underline mr-4">GitHub</a>
                                {project.liveUrl && <a href={project.liveUrl} className="text-blue-500 hover:text-blue-700 underline">Live site</a>}
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
