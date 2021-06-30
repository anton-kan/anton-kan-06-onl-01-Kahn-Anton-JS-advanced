import { createSlice } from '@reduxjs/toolkit';
import mutatingMethods from '../controller/mutating-methods';
import nonMutatingMethods from '../controller/non-mutating-methods';
import unknownMethods from '../controller/unknown-methods';
import allMethods from '../model/all-methods';

const lists = createSlice({
  name: 'lists',
  initialState: {
    mutating: mutatingMethods(),
    unknown: unknownMethods(),
    nonMutating: nonMutatingMethods(),
    userMutating: [],
    userSource: allMethods(),
    userNonMutating: [],
    all: allMethods(),
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
