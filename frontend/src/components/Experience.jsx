function Experience({ experienceData }) {
  if (!experienceData) {
    return <div className="text-center text-gray-600 text-xl">No Experience data.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl text-center font-bold text-gray-800 mb-6">Experience</h2>

      {experienceData.map((job, index) => (
        <div key={index} className="mb-8 p-4 shadow-md rounded-lg bg-white">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">{job.role}</h3>
          <p className="text-gray-600 mb-2">{job.company} | {job.date}</p>

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

  