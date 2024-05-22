import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';

describe('Navbar component', () => {
  test('renders without crashing', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
  });

  test('contains correct links', () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    
    const cvLink = screen.getByRole('link', { name: /Software engineer/i });
    expect(cvLink).toBeInTheDocument();
    expect(cvLink).toHaveAttribute('href', '/engineer');
    
    const photosLink = screen.getByRole('link', { name: /photography/i });
    expect(photosLink).toBeInTheDocument();
    expect(photosLink).toHaveAttribute('href', '/photography');
  });
});
