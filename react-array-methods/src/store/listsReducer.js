import { createSlice } from '@reduxjs/toolkit';

export const lists = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {
    init: (state, { payload }) => payload,
    move: (state, { payload }) => {
      state[payload.dest] = [...state[payload.dest], payload.method];
      state[payload.source] = state[payload.source].filter((item) => item !== payload.method);
      return state;
    },
  },
});

export const { init, move } = lists.actions;

export default lists.reducer;
