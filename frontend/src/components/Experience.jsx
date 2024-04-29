function Experience({ experienceData }) {
  if (!experienceData) {
    return <div>No Experience data.</div>;
  }

  return (
    <div>
      <h2>Experience</h2>

      {experienceData.map((job, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{job.company}</h3>
          <p><strong>Role:</strong> {job.role}</p>
          <p><strong>Date:</strong> {job.date}</p>

          <ul>
            {job.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>

          <h4>Skills</h4>
          <ul>
            {job.skills.map((skill, j) => (
              <li key={j}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export { Experience };

  