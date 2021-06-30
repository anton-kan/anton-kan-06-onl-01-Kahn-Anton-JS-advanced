import React from 'react';
import MethodsListsContainer from '../components/MethodsListsContainer';

const Solution = () => {
  const lists = [
    { title: 'Mutating', key: 'mutating' },
    { title: 'Unknown', key: 'unknown' },
    { title: 'Non-mutating', key: 'nonMutating' },
  ];

  return (
    <section>
      <h2>Correct solution</h2>
      <MethodsListsContainer readonly lists={lists} />
    </section>
  );
};

export default Solution;
