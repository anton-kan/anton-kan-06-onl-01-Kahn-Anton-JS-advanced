import { createSlice } from '@reduxjs/toolkit';

const initialState = { total: 0, right: 0, wrong: 0 };

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const newState = { ...state };
      newState.total++;
      payload.right ? newState.right++ : newState.wrong++;
      return newState;
    },
    reset: () => {
      return { ...initialState };
    },
  },
});

export const { increment, reset } = counter.actions;

export default counter.reducer;
