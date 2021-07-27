import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import ITimer from '../interfaces/ITimer';

interface ITimerPayload {
  intervalRef: null | NodeJS.Timeout;
}

const initialState: ITimer = { intervalRef: null, value: 0 };

const timer = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setRef: (state: ITimer, action: PayloadAction<ITimerPayload>) => {
      const { intervalRef } = action.payload;
      return { ...state, intervalRef };
    },
    stop: (state: ITimer) => {
      if (state.intervalRef) {
        clearInterval(state.intervalRef);
      }
      return { ...state, intervalRef: null };
    },
    increment: (state: ITimer) => {
      return { ...state, value: state.value + 1 };
    },
    reset: (state: ITimer) => {
      return { ...state, value: 0 };
    },
  },
});

export const start = (dispatch: Dispatch, getState: Function) => {
  if (!getState().timer.intervalRef) {
    const intervalRef = setInterval(() => {
      dispatch(timer.actions.increment());
    }, 1000);
    dispatch(timer.actions.setRef({ intervalRef }));
  }
};

export const { reset, stop } = timer.actions;

export default timer.reducer;
