import MethodsListsContainer from '../components/MethodsListsContainer';
import IMethodsList from '../interfaces/IMethodsList';
import allMethods from '../model/all-methods';

const Reference = () => {
  const lists: IMethodsList[] = [{ title: 'All methods', key: 'all', list: allMethods() }];

  return (
    <section>
      <h2>JavaScript Array methods Reference</h2>
      <MethodsListsContainer readonly withLinks lists={lists} />
    </section>
  );
};

export default Reference;
