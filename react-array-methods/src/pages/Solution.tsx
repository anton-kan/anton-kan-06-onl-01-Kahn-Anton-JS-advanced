import MethodsListsContainer from '../components/MethodsListsContainer';
import IMethodsList from '../interfaces/IMethodsList';
import mutatingMethods from '../controller/mutating-methods';
import nonMutatingMethods from '../controller/non-mutating-methods';
import unknownMethods from '../controller/unknown-methods';

const Solution = () => {
  const lists: IMethodsList[] = [
    { title: 'Mutating', key: 'mutating', list: mutatingMethods() },
    { title: 'Unknown', key: 'unknown', list: unknownMethods() },
    { title: 'Non-mutating', key: 'nonMutating', list: nonMutatingMethods() },
  ];

  return (
    <section>
      <h2>Correct solution</h2>
      <MethodsListsContainer readonly withLinks={false} lists={lists} />
    </section>
  );
};

export default Solution;
