import React from 'react';
import MethodsListsContainer from '../components/MethodsListsContainer';
import Counter from '../components/Counter';

import allMethods from '../model/all-methods';

const Game = () => {
  const titles = ['Mutating', 'All', 'Non-mutating'];
  const initialLists = [[], allMethods(), []];

  return (
    <section>
      <h2>The game has started!</h2>
      <Counter />
      <MethodsListsContainer titles={titles} initialLists={initialLists} />
    </section>
  );
};

export default Game;
