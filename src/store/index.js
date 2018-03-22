import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const enhancer = applyMiddleware(thunk);

const store = createStore(reducer, enhancer);

// dev only, no need in prod
window.store = store;

export default store;
