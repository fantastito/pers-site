import React from 'react';
import { TitleCard } from './TitleCard';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';
import { Experience } from './Experience';

import { resume } from '../resume';

function Resume() {
  return (
    <div>
      <TitleCard />
      <AboutMe aboutMeData={resume.aboutme} />
      <Projects projectsData={resume.projects} />
      <Experience experienceData={resume.experience} />
    </div>
  );
}

export default Resume;
