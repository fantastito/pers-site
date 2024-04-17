import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders pers site', () => {
  render(<App />);
  const linkElement = screen.getByText(/simon budden/i);
  expect(linkElement).toBeInTheDocument();
});
