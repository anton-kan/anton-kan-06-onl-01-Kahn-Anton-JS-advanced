import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './listsReducer';
import counterReducer from './counterReducer';

const reducer = { lists: listsReducer, counter: counterReducer };

const store = configureStore({ reducer });

export default store;
