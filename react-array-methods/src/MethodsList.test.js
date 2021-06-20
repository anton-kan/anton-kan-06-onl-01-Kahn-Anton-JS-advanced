import { render, screen } from '@testing-library/react';
import MethodsList from './MethodsList';
import MethodsListsContext from './MethodsListsContext';

test('renders Methods list', () => {
  const title = 'Test methods list title';
  const methodsList = ['method1', 'method2'];
  render(
    <MethodsListsContext.Provider value={{ methodsList }}>
      <MethodsList title={title} methodsKey="methodsList" />
    </MethodsListsContext.Provider>
  );

  const titleElement = screen.getByText(title);
  const methodElements = methodsList.map((method) => screen.getByText(method));

  expect(titleElement).toBeInTheDocument();
  methodElements.forEach((element) => expect(element).toBeInTheDocument());
});
