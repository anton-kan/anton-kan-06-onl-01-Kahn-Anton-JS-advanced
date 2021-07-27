import styled from 'styled-components';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset as resetCounterAction } from '../store/counterReducer';
import { reset as resetListsAction } from '../store/listsReducer';
import { reset as resetTimerAction } from '../store/timerReducer';
import { start as startTimerThunk } from '../store/timerReducer';
import { reset as resetWinAction } from '../store/winReducer';
import { addTopScore } from '../controller/top-scores-storage';
import IState from '../interfaces/IState';
import ICounter from '../interfaces/ICounter';
import ITimer from '../interfaces/ITimer';

interface IWonPopupProps {
  won: boolean;
}

const VeilDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
`;

const WonPopup = (props: IWonPopupProps) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const counterState = useSelector<IState, ICounter>((state) => state.counter);
  const timerState = useSelector<IState, ITimer>((state) => state.timer);

  if (props.won) {
    const saveScore = () => {
      addTopScore(name, timerState.value, counterState.total, counterState.right, counterState.wrong);
    };

    const restart = () => {
      dispatch(resetWinAction());
      dispatch(resetListsAction());
      dispatch(resetCounterAction());
      dispatch(resetTimerAction());
      dispatch(startTimerThunk);
      saveScore();
    };

    const finish = () => {
      dispatch(resetWinAction());
      saveScore();
    };

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };

    return (
      <VeilDiv>
        <PopupDiv>
          <h2>Congratulations!</h2>
          <p>You Won!</p>
          <form>
            <label>
              Enter your name: <input type="text" value={name} onChange={handleChangeName} />
            </label>
          </form>
          <ButtonsDiv>
            <button onClick={finish}>Finish</button>
            <button onClick={restart}>Restart</button>
          </ButtonsDiv>
        </PopupDiv>
      </VeilDiv>
    );
  }
  return <></>;
};

export default WonPopup;
