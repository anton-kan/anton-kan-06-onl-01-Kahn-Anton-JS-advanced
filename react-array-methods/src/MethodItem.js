import React, { useContext } from 'react';
import MethodsListsContext from './MethodsListsContext';

import './MethodItem.css';

const MethodItem = ({ method, listIndex }) => {
  const { methodLists, updateMethodLists } = useContext(MethodsListsContext) || [];

  const move = (shiftIndex) => {
    methodLists[+listIndex + shiftIndex].push(method);
    methodLists[listIndex] = methodLists[listIndex].filter((item) => item !== method);
    updateMethodLists([...methodLists]);
  };

  const moveLeft = () => move(-1);

  const moveRight = () => move(+1);

  return (
    <li className="MethodItem">
      {listIndex > 0 ? <button onClick={moveLeft}>&#8592;</button> : <></>}
      <span data-tooltip={method}>{method}</span>
      {listIndex < 2 ? <button onClick={moveRight}>&#8594;</button> : <></>}
    </li>
  );
};

export default MethodItem;
