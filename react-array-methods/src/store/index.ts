import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './listsReducer';
import counterReducer from './counterReducer';
import timerReducer from './timerReducer';

const reducer = { lists: listsReducer, counter: counterReducer, timer: timerReducer };

const store = configureStore({ reducer });

export default store;
