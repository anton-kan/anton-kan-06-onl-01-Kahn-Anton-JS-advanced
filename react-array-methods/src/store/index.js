import { combineReducers, createStore } from 'redux';
import listsReducer from './listsReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({ lists: listsReducer, counter: counterReducer });

const store = createStore(rootReducer);

export default store;
