import React, { useState } from 'react';
import MethodsList from './MethodsList';
import Tooltip from './Tooltip';
import MethodsListsContext from './MethodsListsContext';

import allMethods from './model/all-methods';

import './MethodsListsContainer.css';

const MethodsListsContainer = () => {
  const [methodLists, updateMethodLists] = useState([[], allMethods(), []]);

  return (
    <div className="MethodsListsContainer">
      <Tooltip />
      <MethodsListsContext.Provider value={{ methodLists, updateMethodLists }}>
        <MethodsList title="Mutating" listIndex="0" />
        <MethodsList title="All" listIndex="1" />
        <MethodsList title="Non-mutating" listIndex="2" />
      </MethodsListsContext.Provider>
    </div>
  );
};

export default MethodsListsContainer;
