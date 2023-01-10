import { createStore,applyMiddleware } from 'redux';
import appReducer from './reducer';
import thunk from 'redux-thunk';

const middleware = [thunk]


const store = createStore(appReducer,applyMiddleware(...middleware))

export default store;