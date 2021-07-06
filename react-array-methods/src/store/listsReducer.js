import { createSlice } from '@reduxjs/toolkit';
import allMethods from '../model/all-methods';

const lists = createSlice({
  name: 'lists',
  initialState: {
    mutating: [],
    source: allMethods(),
    nonMutating: [],
  },
  reducers: {
    move: (state, { payload }) => {
      state[payload.dest] = [...state[payload.dest], payload.method];
      state[payload.source] = state[payload.source].filter((item) => item !== payload.method);
      return state;
    },
  },
});

export const { init, move } = lists.actions;

export default lists.reducer;
