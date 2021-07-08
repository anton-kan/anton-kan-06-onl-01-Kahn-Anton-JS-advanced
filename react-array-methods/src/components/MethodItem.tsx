import { NavLink, generatePath } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increment as incrementAction } from '../store/counterReducer';
import { move as moveAction } from '../store/listsReducer';

import './MethodItem.css';
import ROUTING_PATHS from '../helpers/routing_paths';
import ILists from '../store/ILists';

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
      dispatch(incrementAction({ right: true })); // TODO: Detect if the click was right or wrong
      dispatch(moveAction({ source: ownListKey, dest: destListKey, method }));
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
