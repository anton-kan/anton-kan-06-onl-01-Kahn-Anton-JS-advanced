import { useDispatch } from 'react-redux';
import { reset as resetCounterAction } from '../store/counterReducer';
import { reset as resetListsAction } from '../store/listsReducer';

interface IWonPopupProps {
  won: boolean;
}

const WonPopup = (props: IWonPopupProps) => {
  const dispatch = useDispatch();

  if (props.won) {
    const restart = () => {
      dispatch(resetListsAction());
      dispatch(resetCounterAction());
    };

    return (
      <div>
        You Won!<button onClick={restart}>Restart</button>
      </div>
    );
  }
  return <></>;
};

export default WonPopup;
