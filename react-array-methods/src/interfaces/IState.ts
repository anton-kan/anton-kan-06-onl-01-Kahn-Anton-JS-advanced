import ILists from './ILists';
import ICounter from './ICounter';
import ITimer from './ITimer';

interface IState {
  lists: ILists;
  counter: ICounter;
  timer: ITimer;
  win: boolean;
}

export default IState;
