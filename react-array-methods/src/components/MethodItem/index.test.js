import { render, screen } from '@testing-library/react';
import MethodItem from '.';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const mockReducer = (state, action) => state;

test('renders Method item', () => {
  const method = 'Method';
  render(
    <Provider store={createStore(mockReducer)}>
      <MethodItem method={method} />
    </Provider>
  );

  const methodElement = screen.getByText(method);

  expect(methodElement).toBeInTheDocument();
});
