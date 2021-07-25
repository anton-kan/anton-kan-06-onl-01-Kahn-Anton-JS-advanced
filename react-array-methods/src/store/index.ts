import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './listsReducer';
import counterReducer from './counterReducer';
import timerReducer from './timerReducer';
import winReducer from './winReducer';

const reducer = { lists: listsReducer, counter: counterReducer, timer: timerReducer, win: winReducer };

const store = configureStore({ reducer });

export default store;
