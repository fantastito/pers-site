import { render, screen } from '@testing-library/react';
import { Projects } from '../../components/Projects';

describe('Projects Component', () => {
  it('should render projects correctly', () => {
    const mockProjects = [
      {
        title: "TutorMatch",
        description: "A web app that connects volunteer tutors with students in need of some extra help. Tutors can indicate their subjects and availability; students can search for tutors and request a slot. Try logging in as stu@email.com / Password123!",
        link: "https://github.com/KatBiel/TutorMatch",
        tech: ["Flask", "React", "MongoDB", "Python", "Node.js", "Bootstrap", "Firebase", "Postman", "Trello", "Visual Studio"]
      },
      {
        title: "Acebook",
        description: "A social media web app developed from legacy code.",
        link: "https://github.com/fantastito/Acebook",
        tech: ["MongoDB", "Express", "React", "Node.js", "CSS", "Postman", "Trello", "Visual Studio"]
      },
      {
        title: "Personal website",
        description: "A portfolio website and platform for projects.",
        link: "https://github.com/fantastito/pers-site",
        tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Visual Studio"]
      },
      {
        title: "Acebook Mobile",
        description: "An iOS frontend for a MERN social media app developed from a seed repo.",
        link: "https://github.com/fantastito/Acebook-Mobile",
        tech: ["SwiftUI", "XCode", "Cloudinary", "Postman", "Trello"]
      }
    ];

    render(<Projects projectsData={mockProjects} />);

    expect(screen.getByText("TutorMatch")).toBeInTheDocument();
    expect(screen.getByText(/volunteer tutors/)).toBeInTheDocument();
    expect(screen.getByText("Acebook")).toBeInTheDocument();
    expect(screen.getByText("Personal website")).toBeInTheDocument();
    expect(screen.getByText("Acebook Mobile")).toBeInTheDocument();
  });
});
