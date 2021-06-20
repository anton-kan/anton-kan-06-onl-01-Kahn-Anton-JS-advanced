import React from 'react';
import MethodsList from './MethodsList';
import Tooltip from './Tooltip';
import MethodsListsContext from './MethodsListsContext';

import mutatingMethods from './controller/mutating-methods';
import nonMutatingMethods from './controller/non-mutating-methods';
import allMethods from './model/all-methods';

import './MethodsListsContainer.css';

const MethodsListsContainer = () => {
  return (
    <div className="MethodsListsContainer">
      <Tooltip />
      <MethodsListsContext.Provider
        value={{ mutating: mutatingMethods(), all: allMethods(), nonMutating: nonMutatingMethods() }}
      >
        <MethodsList title="Mutating" methodsKey="mutating" />
        <MethodsList title="All" methodsKey="all" />
        <MethodsList title="Non-mutating" methodsKey="nonMutating" />
      </MethodsListsContext.Provider>
    </div>
  );
};

export default MethodsListsContainer;
