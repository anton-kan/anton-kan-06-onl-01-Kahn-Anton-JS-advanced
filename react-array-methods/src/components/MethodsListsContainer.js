import React from 'react';
import MethodsList from './MethodsList';
import Tooltip from './Tooltip';

import './MethodsListsContainer.css';

const MethodsListsContainer = ({ readonly, withLinks, lists }) => {
  return (
    <div className="MethodsListsContainer">
      <Tooltip />
      {lists.map((item, index) => (
        <MethodsList
          withLinks={withLinks}
          title={item.title}
          key={item.key}
          ownListKey={item.key}
          leftListKey={!readonly && index > 0 && lists[index - 1].key}
          rightListKey={!readonly && index < lists.length - 1 && lists[index + 1].key}
        />
      ))}
    </div>
  );
};

export default MethodsListsContainer;
