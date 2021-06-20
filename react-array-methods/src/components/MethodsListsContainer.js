import React, { useState } from 'react';
import MethodsList from './MethodsList';
import Tooltip from './Tooltip';
import MethodsListsContext from './MethodsListsContext';

import './MethodsListsContainer.css';

const MethodsListsContainer = ({ readonly, titles, initialLists }) => {
  const [methodLists, updateMethodLists] = useState(initialLists);

  return (
    <div className="MethodsListsContainer">
      <Tooltip />
      <MethodsListsContext.Provider value={{ readonly, methodLists, updateMethodLists }}>
        {titles.map((item, index) => (
          <MethodsList title={item} key={item} listIndex={index} />
        ))}
      </MethodsListsContext.Provider>
    </div>
  );
};

export default MethodsListsContainer;
