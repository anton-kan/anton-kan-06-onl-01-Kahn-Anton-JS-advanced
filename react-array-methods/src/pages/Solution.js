import React from 'react';
import MethodsListsContainer from '../components/MethodsListsContainer';

import mutatingMethods from '../controller/mutating-methods';
import nonMutatingMethods from '../controller/non-mutating-methods';
import unknownMethods from '../controller/unknown-methods';

const Solution = () => {
  const titles = ['Mutating', 'Unknown', 'Non-mutating'];
  const lists = [mutatingMethods(), unknownMethods(), nonMutatingMethods()];

  return (
    <section>
      <h2>Correct solution</h2>
      <MethodsListsContainer readonly titles={titles} initialLists={lists} />
    </section>
  );
};

export default Solution;
