import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ITimer from '../interfaces/ITimer';

interface ITimerPayload {
  intervalRef: null | NodeJS.Timeout;
}

const initialState: ITimer = { intervalRef: null, value: 0 };

const timer = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: (state: ITimer, action: PayloadAction<ITimerPayload>) => {
      console.log('Start timer action invoked');
      const { intervalRef } = action.payload;
      return { ...state, intervalRef };
    },
    stop: (state: ITimer) => {
      console.log('Stop timer action invoked', state.intervalRef);
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

export const { increment, reset, start, stop } = timer.actions;

export default timer.reducer;
