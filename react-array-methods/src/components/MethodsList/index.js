import React, { useState, useContext } from 'react';
import MethodItem from '../MethodItem';
import MethodsListsContext from '../MethodsListsContext';
import MethodsListFilter from './MethodsListFilter';
import MethodsListFilterContext from './MethodsListFilterContext';

const MethodsList = ({ title, listIndex }) => {
  const [filter, setFilter] = useState('');

  const methods = useContext(MethodsListsContext).methodLists[+listIndex] || [];

  const list = filter ? methods.filter((method) => method.toLowerCase().includes(filter.toLowerCase())) : methods;
  return (
    <MethodsListFilterContext.Provider value={{ filter, setFilter }}>
      <div className="MethodsList">
        <h3>{title}</h3>
        <MethodsListFilter />
        <ul>
          {list.map((method) => (
            <MethodItem key={method} method={method} listIndex={listIndex} />
          ))}
        </ul>
      </div>
    </MethodsListFilterContext.Provider>
  );
};

export default MethodsList;
