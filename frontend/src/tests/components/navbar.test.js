import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Used for routing context in tests
import Navbar from '../../components/Navbar'; // Adjust the import path as necessary

describe('Navbar component', () => {
  test('renders without crashing', () => {
    render(<Navbar />, { wrapper: MemoryRouter }); // Wrap in MemoryRouter for Router functionality
  });

  test('contains correct links', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    
    // Check for CV link
    const cvLink = screen.getByRole('link', { name: /cv/i });
    expect(cvLink).toBeInTheDocument();
    expect(cvLink).toHaveAttribute('href', '/cv');
    
    // Check for Photos link
    const photosLink = screen.getByRole('link', { name: /photos/i });
    expect(photosLink).toBeInTheDocument();
    expect(photosLink).toHaveAttribute('href', '/photos');
  });
});
