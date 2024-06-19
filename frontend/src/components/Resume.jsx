import React from 'react';
import { TitleCard } from './TitleCard';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Interests } from './Interests';

import { resume } from '../resume';

export function Resume() {
  return (
    <div>
      <TitleCard />
      <AboutMe aboutMeData={resume.aboutme} />
      <Projects projectsData={resume.projects} />
      <Experience experienceData={resume.experience} />
      <Interests interestsData={resume.interests} />
    </div>
  );
};