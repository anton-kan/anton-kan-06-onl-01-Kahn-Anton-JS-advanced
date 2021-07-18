import { render } from '@testing-library/react';
import Tooltip from '.';

test('renders Tooltip', () => {
  const { container } = render(<Tooltip />);
  const tooltipElement = container.querySelector('.Tooltip');
  expect(tooltipElement).toBeInTheDocument();
});
