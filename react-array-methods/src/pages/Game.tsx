import MethodsListsContainer from '../components/MethodsListsContainer';
import Counter from '../components/Counter';
import { useSelector } from 'react-redux';
import IState from '../interfaces/IState';
import IMethodsList from '../interfaces/IMethodsList';
import checkMethodLists from '../controller/check-method-lists';

const Game = () => {
  const lists: IMethodsList[] = [
    { title: 'Mutating', key: 'mutating', list: [] },
    { title: 'Source', key: 'source', list: [] },
    { title: 'Non-mutating', key: 'nonMutating', list: [] },
  ];

  const listsState = useSelector((state: IState) => state.lists);
  lists.forEach((item) => (item.list = listsState[item.key] || []));
  const won = checkMethodLists(listsState);

  return (
    <section>
      <h2>The game has started!</h2>
      {won && <div>You Won!</div>}
      <Counter />
      <MethodsListsContainer readonly={false} lists={lists} withLinks={false} />
    </section>
  );
};

export default Game;
