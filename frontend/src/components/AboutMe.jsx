import githubMark from "../assets/githubMark.png"
import linkedInMark from "../assets/linkedInMark.png"

function AboutMe({ aboutMeData }) {
    if (!aboutMeData) {
      return <div>No AboutMe data. 🤷🏼‍♂️</div>;
    }
  
    const { summary = [], skills = [], links = {} } = aboutMeData;
  
    return (
      <div className="p-4">
        
        {/* Summary */}
        <p className="mb-4">
          <div className="pb-1">{summary[0]}</div>
          <div className="pb-1">{summary[1]}</div>
          <div>{summary.slice(2).join(' ')}</div> 
        </p>

        {/* GitHub, LinkedIn & Email links */}
        <div className="flex justify-center items-center space-x-4 mb-4">
          <a href={links.github} className="rounded-full">
            <img src={githubMark} alt="GitHub portfolio link" className="w-10 h-10 object-cover transition-transform duration-300 transform hover:scale-110" />
          </a>
          <a href={links.linkedin} className="">
            <img src={linkedInMark} alt="LinkedIn portfolio link" className="w-10 h-10 object-cover transition-transform duration-300 transform hover:scale-110" />
          </a>
          <a href={links.email} className="flex items-center text-5xl transition-transform duration-300 transform hover:scale-110">
            ✉️
          </a>
        </div>

        {/* Skills highlights */}
        <ul className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, j) => (
            <li key={j} className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700">{skill}</li>
          ))}
        </ul>
  
      </div>
    );
  }
  
  export { AboutMe };
  