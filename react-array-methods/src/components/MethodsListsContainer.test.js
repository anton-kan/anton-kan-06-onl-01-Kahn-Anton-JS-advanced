import { render } from '@testing-library/react';
import MethodsListsContainer from './MethodsListsContainer';

test('renders tooltip and 3 lists', () => {
  const titles = ['Title 1', 'Title 2', 'Title 3'];
  const lists = [['item 11', 'item 12', 'item 13'], ['item 21'], ['item 31', 'item 32']];

  const { container } = render(<MethodsListsContainer titles={titles} initialLists={lists} />);
  const tooltipElement = container.querySelector('.Tooltip');
  const methodsListElements = container.querySelectorAll('.MethodsList');
  expect(tooltipElement).toBeInTheDocument();
  expect(methodsListElements.length).toBe(3);
});
