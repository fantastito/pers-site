import { render, screen } from '@testing-library/react';
import { Interests } from '../../components/Interests';

describe('generate Interests component', () => {
    it('should generate the Interests section correction', () => {
        const mockInterets = ["F1", "Photography","Hiking", "Campari spritz"];

        render(<Interests interestsData={mockInterets} />);

        expect(screen.getByText("F1")).toBeInTheDocument();
    });
});