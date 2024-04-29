import { render, screen } from '@testing-library/react';
import { AboutMe } from '../../components/AboutMe';

describe('Generate AboutMe function', () => {
  it('should generate the AboutMe section correctly', () => {
    const mockAboutMe = {
      name: "Simon Budden",
      title: "Software Developer",
      location: "London, UK",
      email: "simon.budden@gmail.com",
      summary: [
        "Junior full-stack software engineer.",
        "Experience with Python, JavaScript, No/SQL databases, React, APIs, test-driven development, object-oriented programming.",
        "A decade of comms and policy experience in Brussels and London, interpreting the European Union and securing ports.",
        "Now looking to use passion for crafting solutions to build things."
      ],
      skills: ["JavaScript", "Python", "HTML/CSS", "SQL", "Git", "Agile methodologies", "Project management", "Stakeholder management", "Copywriting"],
      links: {
        github: "https://www.github.com/fantastito",
        linkedin: "https://www.linkedin.com/in/simon-budden-0b280518/",
        email: "mailto:simon.budden@gmail.com"
      }
    };

    render(<AboutMe aboutMeData={mockAboutMe} />);

    // Checking content directly within the rendered HTML
    expect(screen.getByText("London, UK")).toBeInTheDocument();
    expect(screen.getByText("Agile methodologies")).toBeInTheDocument();
    expect(screen.getByText(/Brussels/)).toBeInTheDocument();
  });
});
