import { render, screen } from '@testing-library/react';
import MethodsList from '.';
import MethodsListsContext from '../MethodsListsContext';

test('renders Methods list', () => {
  const title = 'Test methods list title';
  const methodsList = ['method1', 'method2'];
  render(
    <MethodsListsContext.Provider value={{ methodLists: [methodsList], updateMethodLists: () => {} }}>
      <MethodsList title={title} listIndex="0" />
    </MethodsListsContext.Provider>
  );

  const titleElement = screen.getByText(title);
  const methodElements = methodsList.map((method) => screen.getByText(method));

  expect(titleElement).toBeInTheDocument();
  methodElements.forEach((element) => expect(element).toBeInTheDocument());
});
