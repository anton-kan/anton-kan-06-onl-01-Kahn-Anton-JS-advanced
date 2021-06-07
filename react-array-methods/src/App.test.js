import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Array Methods header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Array Methods/i);
  expect(headerElement).toBeInTheDocument();
});
