import React, { useState, useContext } from 'react';
import MethodItem from './MethodItem';
import MethodsListsContext from './MethodsListsContext';

const MethodsList = ({ title, listIndex }) => {
  const [filter, setFilter] = useState('');

  const methods = useContext(MethodsListsContext).methodLists[+listIndex] || [];

  const changeFilter = (event) => {
    const newFilter = event?.target?.value;
    setFilter(newFilter);
  };

  const list = filter ? methods.filter((method) => method.toLowerCase().includes(filter.toLowerCase())) : methods;
  return (
    <div className="MethodsList">
      <h3>{title}</h3>
      <input type="text" placeholder="Start typing to filter..." value={filter} onChange={changeFilter} />
      <ul>
        {list.map((method) => (
          <MethodItem key={method} method={method} listIndex={listIndex} />
        ))}
      </ul>
    </div>
  );
};

export default MethodsList;
