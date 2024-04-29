  
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
  