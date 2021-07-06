import { render } from '@testing-library/react';
import MethodsListsContainer from '.';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';

test('renders tooltip and 3 lists', () => {
  const lists = [
    { key: 'first', title: 'Title 1' },
    { key: 'second', title: 'Title 2' },
    { key: 'third', title: 'Title 3' },
  ];
  const listsState = { first: ['item 11', 'item 12', 'item 13'], second: ['item 21'], third: ['item 31', 'item 32'] };

  const mockListsReducer = (state, action) => state || listsState;
  const reducer = { lists: mockListsReducer };
  const store = configureStore({ reducer });

  const history = createMemoryHistory();

  const { container } = render(
    <Provider store={store}>
      <Router history={history}>
        <MethodsListsContainer lists={lists} />
      </Router>
    </Provider>
  );
  const tooltipElement = container.querySelector('.Tooltip');
  const methodsListElements = container.querySelectorAll('.MethodsList');
  expect(tooltipElement).toBeInTheDocument();
  expect(methodsListElements.length).toBe(3);
});
