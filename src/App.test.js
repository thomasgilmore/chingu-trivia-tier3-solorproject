import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Chingu Trivia title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chingu Trivia/i);
  expect(linkElement).toBeInTheDocument();
});
