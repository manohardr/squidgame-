// store.js
import { legacy_createStore } from 'redux';
import gameReducer from './redux/Reducer/reducer';
const store = legacy_createStore(gameReducer);

export default store;
