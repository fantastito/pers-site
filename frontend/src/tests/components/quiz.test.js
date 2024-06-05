import { render, screen } from '@testing-library/react';
import Quiz from '../../components/Quiz';

describe('Quiz Component', () => {
    it('should render quiz', () => {
        
        render(<Quiz />);

        expect(screen.getByText("PHOTO QUIZ")).toBeInTheDocument();

    });
});