import ILists from './ILists';
import ICounter from './ICounter';
import ITimer from './ITimer';

interface IState {
  lists: ILists;
  counter: ICounter;
  timer: ITimer;
}

export default IState;
