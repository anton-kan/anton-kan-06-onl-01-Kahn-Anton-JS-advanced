import { render } from '@testing-library/react';
import MethodsListsContainer from './MethodsListsContainer';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('renders tooltip and 3 lists', () => {
  const titles = ['Title 1', 'Title 2', 'Title 3'];
  const lists = [['item 11', 'item 12', 'item 13'], ['item 21'], ['item 31', 'item 32']];

  const mockListsReducer = (state, action) => state || lists;
  const mockRootReducer = combineReducers({ lists: mockListsReducer });

  const history = createMemoryHistory();

  const { container } = render(
    <Provider store={createStore(mockRootReducer)}>
      <Router history={history}>
        <MethodsListsContainer titles={titles} initialLists={lists} />
      </Router>
    </Provider>
  );
  const tooltipElement = container.querySelector('.Tooltip');
  const methodsListElements = container.querySelectorAll('.MethodsList');
  expect(tooltipElement).toBeInTheDocument();
  expect(methodsListElements.length).toBe(3);
});
