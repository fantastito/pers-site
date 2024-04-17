// resume.js

// Data representing your experience
const experienceData = [
    {
      title: "Makers Academy",
      date: "Oct. 2023 to Feb. 2024",
      role: "Coding and Software Development Bootcamp",
      details: [
        "Coding foundations module covering basics of coding and programmes' structure and cloud deployment",
        "Software development module focusing on JavaScript and web applications, including RESTful APIs and agile group projects",
        "Underscored importance of modern software development practices such as using Git and GitHub, pair programming, test-driven development, etc."
      ],
      skills: [
        "JavaScript", "Python", "Postgres", "Flask", "Visual Studio Code", "Jest", "Swift", "Xcode"
      ]
    },
    {
      title: "Dept. for Science, Innovation and Technology, London",
      date: "April to Oct. 2023",
      role: "Cyber security policy advisor",
      details: [
        "Developed new UK internet of things cyber security legislation and collaborated on implementation of enforcement regime"
      ],
      skills: []
    },
    {
        title: "Dept. for Transport",
        date: "April to Oct. 2023",
        role: "Cyber security policy advisor",
        details: [
          "Developed new UK internet of things cyber security legislation and collaborated on implementation of enforcement regime"
        ],
        skills: []
      },
  ];
  
  // Function to generate HTML for each experience entry
  function generateExperienceHTML(experience) {
    return `
      <div class="experience">
        <h2>${experience.title}</h2>
        <h3>${experience.date}</h3>
        <h4>${experience.role}</h4>
        <ul>
          ${experience.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
        ${experience.skills.length > 0 ? `
          <div class="skills">
            <h4>Skills:</h4>
            <ul>
              ${experience.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
          </div>` : ''
        }
      </div>
    `;
  }
  
  // Function to render the resume summary
  function renderResumeSummary() {
    const container = document.getElementById('resume-summary');
    experienceData.forEach(experience => {
      const experienceHTML = generateExperienceHTML(experience);
      container.innerHTML += experienceHTML;
    });
  }
  
  // Call the render function when the page loads
  window.addEventListener('load', renderResumeSummary);
  