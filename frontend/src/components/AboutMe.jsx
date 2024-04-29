function AboutMe({ aboutMeData }) {
    if (!aboutMeData) {
      return <div>No AboutMe data.</div>;
    }
  
    const { name, title, location, summary = [], skills = [], links = {} } = aboutMeData;
  
    return (
      <div>
        <h2>About me</h2>
        <p>{location}</p>
  
        <ul>
          {summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
  
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
  
        <div>
          <a href={links.github}>GitHub</a>
          <a href={links.linkedin}>LinkedIn</a>
          <a href={links.email}>Email</a>
        </div>
      </div>
    );
  }
  
  export { AboutMe };
  