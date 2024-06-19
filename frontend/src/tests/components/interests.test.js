import { render, screen } from '@testing-library/react';
import { Interests } from '../../components/Interests';

describe('generate Interests component', () => {
    it('should generate the Interests section correction', () => {
        const mockInterests = ["F1", "Photography", "Hiking", "Campari spritz"];

        render(<Interests interestsData={mockInterests} />);

        mockInterests.forEach(interest => {
            expect(screen.getByText(interest)).toBeInTheDocument();
        });
    });
});