import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Array Methods header', () => {
  render(<App />);
  const headerElements = screen
    .getAllByText(/Array Methods/i)
    .filter((element) => element.tagName.toLowerCase() === 'h1');
  expect(headerElements.length).toBe(1);
  expect(headerElements[0]).toBeInTheDocument();
});
