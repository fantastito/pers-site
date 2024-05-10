import { render, screen } from '@testing-library/react';
import App from '../App';
import { resume } from '../resume.js';

describe('App Component', () => {
  it('should render the TitleCard, AboutMe, Projects, and Experience components correctly', () => {

    render(<App />);

    // TitleCard
    expect(screen.getByText("SIMON BUDDEN")).toBeInTheDocument();

    // AboutMe
    expect(screen.getByText("Agile methodologies")).toBeInTheDocument();

    // Projects
    expect(screen.getByText(resume.projects[0].title)).toBeInTheDocument();
    expect(screen.getByText(resume.projects[1].description)).toBeInTheDocument();

    // Experience
    expect(screen.getByText(resume.experience[0].company)).toBeInTheDocument();
    expect(screen.getByText("Communications officer")).toBeInTheDocument();
  });
});