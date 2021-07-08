import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import allMethods from '../model/all-methods';
import ILists from './ILists';

interface IListsPayload {
  source: keyof ILists;
  dest: keyof ILists;
  method: string;
}

const initialState: ILists = {
  mutating: [],
  source: allMethods(),
  nonMutating: [],
};

const lists = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    move: (state: ILists, action: PayloadAction<IListsPayload>) => {
      const { source, dest, method } = action.payload;
      state[dest] = [...(state[dest] || []), method];
      state[source] = (state[source] || []).filter((item) => item !== method);
      return state;
    },
  },
});

export const { move } = lists.actions;

export default lists.reducer;
