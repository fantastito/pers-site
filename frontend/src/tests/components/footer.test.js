import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Footer component', () => {
    test('renders footer correctly', () => {

        render(<Footer />);

        expect(screen.getByText("© 2024 simonbudden.dev")).toBeInTheDocument();
    });
});
