import MethodsListsContainer from '../components/MethodsListsContainer';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import IState from '../interfaces/IState';
import IMethodsList from '../interfaces/IMethodsList';
import checkMethodLists from '../controller/check-method-lists';
import WonPopup from '../components/WonPopup';
import { start as startTimer, increment as incrementTimer, stop as stopTimer } from '../store/timerReducer';
import { Dispatch } from '@reduxjs/toolkit';

const Game = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Game onMount invoked');
    dispatch((dispatch: Dispatch) => {
      const intervalRef = setInterval(() => {
        dispatch(incrementTimer());
      }, 1000);
      dispatch(startTimer({ intervalRef }));
    });
  }, [dispatch]);

  const lists: IMethodsList[] = [
    { title: 'Mutating', key: 'mutating', list: [] },
    { title: 'Source', key: 'source', list: [] },
    { title: 'Non-mutating', key: 'nonMutating', list: [] },
  ];

  const listsState = useSelector((state: IState) => state.lists);
  lists.forEach((item) => (item.list = listsState[item.key] || []));

  const won = checkMethodLists(listsState);
  if (won) {
    console.log('Dispatching stop timer');
    dispatch(stopTimer());
  }

  return (
    <section>
      <h2>The game has started!</h2>
      <WonPopup won={won} />
      <Counter />
      <MethodsListsContainer readonly={false} lists={lists} withLinks={false} />
    </section>
  );
};

export default Game;
