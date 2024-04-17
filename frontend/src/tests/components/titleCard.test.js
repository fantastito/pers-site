import React from 'react';
import { render } from '@testing-library/react';
import { TitleCard } from '../../components/TitleCard';

describe('TitleCard component', () => {
    test('renders title correctly', () => {
        const { getByText } = render(<TitleCard />);
        
        const titleElement = getByText('SIMON BUDDEN');
        expect(titleElement).toBeInTheDocument();
    })
})
