import { render, screen } from '@testing-library/react';
import MethodItem from './MethodItem';

test('renders Method item', () => {
  const method = 'Method';
  render(<MethodItem method={method} />);

  const methodElement = screen.getByText(method);

  expect(methodElement).toBeInTheDocument();
});
