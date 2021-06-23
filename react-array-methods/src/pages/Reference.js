import React from 'react';

import allMethods from '../model/all-methods';
import MethodsListsContainer from '../components/MethodsListsContainer';

const Reference = () => {
  const titles = ['All methods'];
  const lists = [allMethods()];

  return (
    <section>
      <h2>JavaScript Array methods Reference</h2>
      <MethodsListsContainer readonly withLinks titles={titles} initialLists={lists} />
    </section>
  );
};

export default Reference;
