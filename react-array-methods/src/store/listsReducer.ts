import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import allMethods from '../model/all-methods';
import ILists from '../interfaces/ILists';

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
    reset: () => {
      return { ...initialState };
    },
  },
});

export const { move, reset } = lists.actions;

export default lists.reducer;
