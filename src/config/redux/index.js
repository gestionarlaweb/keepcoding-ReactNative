import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../../redux';

// Combinamos todos los reducers

const globalState = combineReducers(reducers);
const store = createStore(globalState, applyMiddleware(thunk));

export default store;
