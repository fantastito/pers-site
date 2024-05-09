function AboutMe({ aboutMeData }) {
    if (!aboutMeData) {
      return <div>No AboutMe data.</div>;
    }
  
    const { summary = [], skills = [], links = {} } = aboutMeData;
  
    return (
      <div className="p-4">
        <p className="mb-4">
        {summary.join(' ')}
        </p>
  
      <div className="flex justify-center space-x-4 mb-4">
        <a href={links.github} className="text-blue-500 hover:text-blue-700 underline">GitHub</a>
        <a href={links.linkedin} className="text-blue-500 hover:text-blue-700 underline">LinkedIn</a>
        <a href={links.email} className="text-blue-500 hover:text-blue-700 underline">Email</a>
      </div>

        <ul className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, j) => (
            <li key={j} className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700">{skill}</li>
          ))}
        </ul>
  
      </div>
    );
  }
  
  export { AboutMe };
  