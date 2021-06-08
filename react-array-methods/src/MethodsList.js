import React, { useState } from 'react';
import MethodItem from './MethodItem';

const MethodsList = ({ title, methods }) => {
  const [filter, setFilter] = useState('');
  const [filteredMethods, setFilteredMethods] = useState([]);

  const changeFilter = (event) => {
    const newFilter = event?.target?.value;
    setFilter(newFilter);
    setFilteredMethods(methods.filter((method) => method.toLowerCase().includes(newFilter.toLowerCase())));
  };

  const list = filter ? filteredMethods : methods;
  return (
    <div className="MethodsList">
      <h2>{title}</h2>
      <input type="text" placeholder="Start typing to filter..." value={filter} onChange={changeFilter} />
      <ul>
        {list.map((method) => (
          <MethodItem key={method} method={method} />
        ))}
      </ul>
    </div>
  );
};

export default MethodsList;
