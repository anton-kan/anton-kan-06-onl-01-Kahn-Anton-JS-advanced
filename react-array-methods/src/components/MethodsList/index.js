import React from 'react';
import { useLocation } from 'react-router-dom';
import MethodItem from '../MethodItem';
import MethodsListFilter from './MethodsListFilter';
import { useSelector } from 'react-redux';

const MethodsList = ({ title, listIndex }) => {
  const filterKey = `${title}Filter`;

  const filter = new URLSearchParams(useLocation().search).get(filterKey);

  const methods = useSelector((state) => state.lists[+listIndex]);

  const list = filter ? methods.filter((method) => method.toLowerCase().includes(filter.toLowerCase())) : methods;
  return (
    <div className="MethodsList">
      <h3>{title}</h3>
      <MethodsListFilter filterKey={filterKey} />
      <ul>
        {list.map((method) => (
          <MethodItem key={method} method={method} listIndex={listIndex} />
        ))}
      </ul>
    </div>
  );
};

export default MethodsList;
