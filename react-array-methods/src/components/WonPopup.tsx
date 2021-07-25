import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { reset as resetCounterAction } from '../store/counterReducer';
import { reset as resetListsAction } from '../store/listsReducer';
import { reset as resetTimerAction } from '../store/timerReducer';
import { start as startTimerAction } from '../store/timerReducer';
import { increment as incrementTimerAction } from '../store/timerReducer';
import { Dispatch } from '@reduxjs/toolkit';

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

const WonPopup = (props: IWonPopupProps) => {
  const dispatch = useDispatch();

  if (props.won) {
    const restart = () => {
      dispatch(resetListsAction());
      dispatch(resetCounterAction());
      dispatch(resetTimerAction());
      dispatch((dispatch: Dispatch) => {
        const intervalRef = setInterval(() => {
          dispatch(incrementTimerAction());
        }, 1000);
        dispatch(startTimerAction({ intervalRef }));
      });
    };

    return (
      <VeilDiv>
        <PopupDiv>
          <h2>Congratulations!</h2>
          <p>You Won!</p>
          <button onClick={restart}>Restart</button>
        </PopupDiv>
      </VeilDiv>
    );
  }
  return <></>;
};

export default WonPopup;
