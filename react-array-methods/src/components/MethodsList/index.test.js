import { render, screen } from '@testing-library/react';
import MethodsList from '.';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

test('renders Methods list', () => {
  const history = createMemoryHistory();

  const title = 'Test methods list title';
  const methodsList = ['method1', 'method2'];

  const mockReducer = (state, action) => state || { methods: methodsList };
  const reducer = { lists: mockReducer };

  const store = configureStore({ reducer });

  render(
    <Provider store={store}>
      <Router history={history}>
        <MethodsList title={title} ownListKey="methods" />
      </Router>
    </Provider>
  );

  const titleElement = screen.getByText(title);
  const methodElements = methodsList.map((method) => screen.getByText(method));

  expect(titleElement).toBeInTheDocument();
  methodElements.forEach((element) => expect(element).toBeInTheDocument());
});
