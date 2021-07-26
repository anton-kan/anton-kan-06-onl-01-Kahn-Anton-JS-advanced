import { createSlice } from '@reduxjs/toolkit';

const counter = createSlice({
  name: 'counter',
  initialState: { total: 0, right: 0, wrong: 0 },
  reducers: {
    increment: (state, { payload }) => {
      const newState = { ...state };
      newState.total++;
      payload.right ? newState.right++ : newState.wrong++;
      return newState;
    },
  },
});

export const { increment } = counter.actions;

export default counter.reducer;
