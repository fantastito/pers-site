import React from 'react';
import { render } from '@testing-library/react';
import { Projects } from '../../components/Projects';

describe('Projects component', () => {
    test('renders text correctly', () => {
        const { getByText } = render(<Projects />);
        
        const titleElement = getByText('TutorMatch');
        expect(titleElement).toBeInTheDocument();
    })
})