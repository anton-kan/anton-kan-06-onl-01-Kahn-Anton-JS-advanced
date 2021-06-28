import React from 'react';
import { useDispatch } from 'react-redux';
import MethodsList from './MethodsList';
import Tooltip from './Tooltip';
import MethodsListsContext from './MethodsListsContext';
import { init } from '../store/listsReducer';

import './MethodsListsContainer.css';

const MethodsListsContainer = ({ readonly, withLinks, titles, initialLists }) => {
  const dispatch = useDispatch();
  dispatch(init(initialLists));

  return (
    <div className="MethodsListsContainer">
      <Tooltip />
      <MethodsListsContext.Provider value={{ readonly, withLinks }}>
        {titles.map((item, index) => (
          <MethodsList title={item} key={item} listIndex={index} />
        ))}
      </MethodsListsContext.Provider>
    </div>
  );
};

export default MethodsListsContainer;
