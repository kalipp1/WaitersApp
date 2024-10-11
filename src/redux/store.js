import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import tablesReducer from './tablesRedux';

const subreducers = {
    tables: tablesReducer,
}

const reducer = combineReducers(subreducers);

const composedEnhancers = compose(
    applyMiddleware(thunk),
    composeWithDevTools()    
  );

const store = createStore(
  reducer,
  initialState,
  composedEnhancers
);

export default store;