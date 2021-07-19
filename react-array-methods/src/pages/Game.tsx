import MethodsListsContainer from '../components/MethodsListsContainer';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import IState from '../interfaces/IState';
import IMethodsList from '../interfaces/IMethodsList';
import checkMethodLists from '../controller/check-method-lists';
import { reset as resetCounterAction } from '../store/counterReducer';
import { reset as resetListsAction } from '../store/listsReducer';

const Game = () => {
  const lists: IMethodsList[] = [
    { title: 'Mutating', key: 'mutating', list: [] },
    { title: 'Source', key: 'source', list: [] },
    { title: 'Non-mutating', key: 'nonMutating', list: [] },
  ];

  const listsState = useSelector((state: IState) => state.lists);
  lists.forEach((item) => (item.list = listsState[item.key] || []));
  const won = checkMethodLists(listsState);

  const dispatch = useDispatch();

  const restart = () => {
    dispatch(resetListsAction());
    dispatch(resetCounterAction());
  };

  return (
    <section>
      <h2>The game has started!</h2>
      {won && (
        <div>
          You Won!<button onClick={restart}>Restart</button>
        </div>
      )}
      <Counter />
      <MethodsListsContainer readonly={false} lists={lists} withLinks={false} />
    </section>
  );
};

export default Game;
