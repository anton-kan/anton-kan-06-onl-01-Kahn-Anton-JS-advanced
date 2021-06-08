import { render, screen } from '@testing-library/react';
import Tooltip from './Tooltip';

test('renders Tooltip', () => {
  const { container } = render(<Tooltip />);
  const tooltipElement = container.querySelector('.Tooltip');
  expect(tooltipElement).toBeInTheDocument();
});
