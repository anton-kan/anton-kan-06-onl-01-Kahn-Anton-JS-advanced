import { NavLink, generatePath } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increment as incrementAction } from '../../store/counterReducer';
import { move as moveAction } from '../../store/listsReducer';
import { set as winAction } from '../../store/winReducer';
import { stop as stopTimerAction } from '../../store/timerReducer';

import './index.css';
import ROUTING_PATHS from '../../helpers/routing_paths';
import ILists from '../../interfaces/ILists';
import checkMethod from '../../controller/check-method';
import { Dispatch } from '@reduxjs/toolkit';
import checkMethodLists from '../../controller/check-method-lists';
import IState from '../../interfaces/IState';

interface IMethodItemProps {
  withLinks?: boolean;
  method: string;
  ownListKey: keyof ILists;
  leftListKey?: keyof ILists;
  rightListKey?: keyof ILists;
}

const MethodItem = (props: IMethodItemProps) => {
  const { withLinks, method, ownListKey, leftListKey, rightListKey } = props;
  const dispatch = useDispatch();

  const referencePath = generatePath(ROUTING_PATHS.method, { methodName: method });

  const move = (destListKey?: keyof ILists) => {
    if (destListKey) {
      dispatch((dispatch: Dispatch, getState: () => IState) => {
        dispatch(incrementAction({ right: checkMethod(method, destListKey) }));
        dispatch(moveAction({ source: ownListKey, dest: destListKey, method }));
        if (checkMethodLists(getState().lists)) {
          dispatch(winAction());
          dispatch(stopTimerAction());
        }
      });
    }
  };

  const moveLeft = () => move(leftListKey);

  const moveRight = () => move(rightListKey);

  return (
    <li className="MethodItem">
      {leftListKey && <button onClick={moveLeft}>&#8592;</button>}
      <span data-tooltip={method}>{withLinks ? <NavLink to={referencePath}>{method}</NavLink> : method}</span>
      {rightListKey && <button onClick={moveRight}>&#8594;</button>}
    </li>
  );
};

export default MethodItem;
