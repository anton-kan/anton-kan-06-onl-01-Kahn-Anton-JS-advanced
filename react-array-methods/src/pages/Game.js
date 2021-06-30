import React from 'react';
import MethodsListsContainer from '../components/MethodsListsContainer';
import Counter from '../components/Counter';

const Game = () => {
  const lists = [
    { title: 'Mutating', key: 'userMutating' },
    { title: 'Source', key: 'userSource' },
    { title: 'Non-mutating', key: 'userNonMutating' },
  ];

  return (
    <section>
      <h2>The game has started!</h2>
      <Counter />
      <MethodsListsContainer lists={lists} />
    </section>
  );
};

export default Game;
