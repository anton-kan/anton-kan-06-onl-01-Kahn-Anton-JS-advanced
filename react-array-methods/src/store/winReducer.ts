import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const win = createSlice({
  name: 'win',
  initialState,
  reducers: {
    set: () => true,
    reset: () => initialState,
  },
});

export const { set, reset } = win.actions;

export default win.reducer;
