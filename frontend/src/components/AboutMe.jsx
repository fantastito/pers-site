function AboutMe({ aboutMeData }) {
    if (!aboutMeData) {
      return <div>No AboutMe data.</div>;
    }
  
    const { location, summary = [], skills = [], links = {} } = aboutMeData;
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">About me</h2>
        <p className="mb-2">{location}</p>
  
        <ul className="mb-4">
          {summary.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
  
        <h3 className="text-lg font-bold mb-2">Skills</h3>
        <ul className="list-disc pl-5 mb-4">
          {skills.map((skill, index) => (
            <li key={index} className="mb-1">{skill}</li>
          ))}
        </ul>
  
        <div className="flex space-x-4">
          <a href={links.github} className="underline text-black">GitHub</a>
          <a href={links.linkedin} className="underline text-black">LinkedIn</a>
          <a href={links.email} className="underline text-black">Email</a>
        </div>
      </div>
    );
  }
  
  export { AboutMe };
  