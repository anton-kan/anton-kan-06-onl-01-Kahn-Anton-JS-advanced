import React, { useContext } from 'react';
import { NavLink, generatePath } from 'react-router-dom';
import MethodsListsContext from './MethodsListsContext';
import { useDispatch } from 'react-redux';
import { increment } from '../store/counterReducer';
import { move as moveAction } from '../store/listsReducer';

import './MethodItem.css';
import ROUTING_PATHS from '../helpers/routing_paths';

const MethodItem = ({ method, listIndex }) => {
  const { readonly, withLinks } = useContext(MethodsListsContext) || [];
  const dispatch = useDispatch();

  const referencePath = generatePath(ROUTING_PATHS.method, { methodName: method });

  const move = (shiftIndex) => {
    dispatch(increment());
    dispatch(moveAction({ source: listIndex, dest: +listIndex + shiftIndex, method }));
  };

  const moveLeft = () => move(-1);

  const moveRight = () => move(+1);

  return (
    <li className="MethodItem">
      {!readonly && listIndex > 0 ? <button onClick={moveLeft}>&#8592;</button> : <></>}
      <span data-tooltip={method}>{withLinks ? <NavLink to={referencePath}>{method}</NavLink> : method}</span>
      {!readonly && listIndex < 2 ? <button onClick={moveRight}>&#8594;</button> : <></>}
    </li>
  );
};

export default MethodItem;
