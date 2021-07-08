import React from 'react';
import MethodsListsContainer from '../components/MethodsListsContainer';
import Counter from '../components/Counter';
import { useSelector } from 'react-redux';

const Game = () => {
  const lists = [
    { title: 'Mutating', key: 'mutating' },
    { title: 'Source', key: 'source' },
    { title: 'Non-mutating', key: 'nonMutating' },
  ];

  const listsState = useSelector((state) => state.lists);
  lists.forEach((item) => (item.list = listsState[item.key]));

  return (
    <section>
      <h2>The game has started!</h2>
      <Counter />
      <MethodsListsContainer lists={lists} />
    </section>
  );
};

export default Game;
