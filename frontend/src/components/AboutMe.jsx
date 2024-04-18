import { resume } from '../resume.js'

const aboutMe = resume.aboutme;

function generateAboutMe() {
    const summaryItems = aboutMe.summary.map(item => `<li>${item}</li>`).join('');
    const skillsList = aboutMe.skills.map(skill => `<li>${skill}</li>`).join('');
    return `
        <h2>About me</h2>
        <p>${aboutMe.location}</p>
        <div>
        <a href="${aboutMe.links.github}">GitHub</a>
        <a href="${aboutMe.links.linkedin}">LinkedIn</a>
        <a href="${aboutMe.links.email}">Email</a>
        </div>
        <ul>${summaryItems}</ul>
        <h3>Skills</h3>
        <ul>${skillsList}</ul>
    `;
}

function renderAboutMe() {
    const aboutMeContainer = document.getElementById('about-me');
    aboutMeContainer.innerHTML = generateAboutMe();
  }
  
export { renderAboutMe, generateAboutMe };