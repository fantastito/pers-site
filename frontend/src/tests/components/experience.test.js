import React from 'react';
import { render } from '@testing-library/react';
import { Experience } from '../../components/Experience';

describe('Experience component', () => {
    test('renders text correctly', () => {
        const { getByText } = render(<Experience />);

        const titleElement = getByText('Dept. for Transport');
        expect(titleElement).toBeInTheDocument();
    })
})