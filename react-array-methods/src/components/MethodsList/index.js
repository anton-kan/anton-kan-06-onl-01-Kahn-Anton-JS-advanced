import React from 'react';
import { useLocation } from 'react-router-dom';
import MethodItem from '../MethodItem';
import MethodsListFilter from './MethodsListFilter';

const MethodsList = ({ withLinks, title, ownListKey, leftListKey, rightListKey, list }) => {
  const filterKey = `${title}Filter`;

  const filter = new URLSearchParams(useLocation().search).get(filterKey);

  const filteredList = filter ? list.filter((method) => method.toLowerCase().includes(filter.toLowerCase())) : list;
  return (
    <div className="MethodsList">
      <h3>{title}</h3>
      <MethodsListFilter filterKey={filterKey} />
      <ul>
        {filteredList.map((method) => (
          <MethodItem
            withLinks={withLinks}
            key={method}
            method={method}
            ownListKey={ownListKey}
            leftListKey={leftListKey}
            rightListKey={rightListKey}
          />
        ))}
      </ul>
    </div>
  );
};

export default MethodsList;
