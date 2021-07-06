import React from 'react';

import MethodsListsContainer from '../components/MethodsListsContainer';
import allMethods from '../model/all-methods';

const Reference = () => {
  const lists = [{ title: 'All methods', key: 'all', list: allMethods() }];

  return (
    <section>
      <h2>JavaScript Array methods Reference</h2>
      <MethodsListsContainer readonly withLinks lists={lists} />
    </section>
  );
};

export default Reference;
