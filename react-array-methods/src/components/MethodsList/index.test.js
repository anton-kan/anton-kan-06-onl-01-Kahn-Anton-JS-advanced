import { render, screen } from '@testing-library/react';
import MethodsList from '.';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const mockReducer = (state, action) => state;

test('renders Methods list', () => {
  const history = createMemoryHistory();

  const title = 'Test methods list title';
  const methodsList = ['method1', 'method2'];
  render(
    <Provider store={createStore(mockReducer, { lists: [methodsList] })}>
      <Router history={history}>
        <MethodsList title={title} listIndex="0" />
      </Router>
    </Provider>
  );

  const titleElement = screen.getByText(title);
  const methodElements = methodsList.map((method) => screen.getByText(method));

  expect(titleElement).toBeInTheDocument();
  methodElements.forEach((element) => expect(element).toBeInTheDocument());
});
