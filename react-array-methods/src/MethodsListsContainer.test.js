import { render } from '@testing-library/react';
import MethodsListsContainer from './MethodsListsContainer';

test('renders tooltip and 3 lists', () => {
  const { container } = render(<MethodsListsContainer />);
  const tooltipElement = container.querySelector('.Tooltip');
  const methodsListElements = container.querySelectorAll('.MethodsList');
  expect(tooltipElement).toBeInTheDocument();
  expect(methodsListElements.length).toBe(3);
});
