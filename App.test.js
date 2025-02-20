import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ATM Operations header', () => {
  render(<App />);
  const linkElement = screen.getByText(/ATM Operations/i);
  expect(linkElement).toBeInTheDocument();
});
