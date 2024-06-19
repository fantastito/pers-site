import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { resume } from '../resume.js';
import { fetchPhotos } from '../flickrAPI.js';

jest.mock('axios');
jest.mock('../flickrAPI');

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the Navbar, TitleCard, AboutMe, Projects, and Experience components correctly', () => {
    render(
      <App />
    );

    // Navbar
    expect(screen.getByText("Photography")).toBeInTheDocument();

    // TitleCard
    expect(screen.getByText("SOFTWARE ENGINEER")).toBeInTheDocument();

    // AboutMe
    expect(screen.getByText("Agile methodologies")).toBeInTheDocument();

    // Projects
    expect(screen.getByText(resume.projects[0].title)).toBeInTheDocument();
    expect(screen.getByText(resume.projects[1].description)).toBeInTheDocument();

    // Experience
    expect(screen.getByText(resume.experience[0].company)).toBeInTheDocument();
    expect(screen.getByText("Communications officer")).toBeInTheDocument();

    // Footer
    expect(screen.getByText("© 2024 simonbudden.dev")).toBeInTheDocument();
  });

  it('should display the photos gallery', async () => {
    fetchPhotos.mockResolvedValue([
      { id: '1', src: 'photo1.jpg', width: 4, height: 3 },
      { id: '2', src: 'photo2.jpg', width: 1, height: 1 },
    ]);

    render(
        <App />
    );

    userEvent.click(screen.getByText('Photography'));

    const photographyTexts = screen.getAllByText(/photography/i);
    expect(photographyTexts.length).toBe(2);
  });
});
