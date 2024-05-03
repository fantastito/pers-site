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

        <h3 className="text-lg- text-center font-bold mb-2">Skills</h3>
        <p className="text-center">
        {skills.map((skill, index) => (
          <span key={index}>{skill}{index < skills.length - 1 ? ' • ' : ''}</span>
        ))}
        </p>
  
      </div>
    );
  }
  
  export { AboutMe };
  