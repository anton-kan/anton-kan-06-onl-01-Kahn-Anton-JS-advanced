import React, { useState, useContext } from 'react';
import MethodsListFilterContext from './MethodsListFilterContext';

const FILTER_DELAY = 1000;

const MethodsListFilter = () => {
  const { filter, setFilter } = useContext(MethodsListFilterContext);
  const [displayedFilter, setDisplayedFilter] = useState(filter);
  const [filterTimeout, setFilterTimeout] = useState('');

  const changeFilter = (event) => {
    const newFilter = event?.target?.value;
    setDisplayedFilter(newFilter);
    if (filterTimeout) {
      clearTimeout(filterTimeout);
    }
    const newTimeout = setTimeout(() => {
      setFilter(newFilter);
    }, FILTER_DELAY);
    setFilterTimeout(newTimeout);
  };

  return <input type="text" placeholder="Start typing to filter..." value={displayedFilter} onChange={changeFilter} />;
};

export default MethodsListFilter;
