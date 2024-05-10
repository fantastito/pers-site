function Experience({ experienceData }) {
  if (!experienceData) {
    return <div className="text-center text-gray-600 text-xl">No Experience data.</div>;
  }

  return (
    <div className="pt-32 p-4">
      <h2 className="text-2xl text-center font-bold text-gray-800 mb-6">Experience</h2>

      {experienceData.map((job, index) => (
        <div key={index} className="mb-8 p-4 border rounded-md border-gray-300 bg-white">
          
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-700 mr-3">{job.role}</h3>
            <p className="text-gray-600 text-right">{job.date}</p>
          </div>
          <p className="text-gray-600 mb-2">{job.company}</p>
          
          <div className="mb-4 pl-4">
          <ul className="list-disc list-inside text-gray-500">
            {job.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
          </div>

          <ul className="flex flex-wrap gap-2">
            {job.skills.map((skill, j) => (
              <li key={j} className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export { Experience };

  