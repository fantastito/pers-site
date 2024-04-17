import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { AboutMe } from '../../components/AboutMe';

delete window.location;
window.location = { href: 'http://localhost/' };

describe('AboutMe component', () => {
    test('renders text correctly', () => {
        const { getByText } = render(<AboutMe />);
        
        const titleElement = getByText('Junior full-stack software engineer.');
        expect(titleElement).toBeInTheDocument();
    })
})