import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

/* eslint-disable no-underscore-dangle */

const store: Store<any, any> = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

// (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
// (window as any).__REDUX_DEVTOOLS_EXTENSION__(),

/* eslint-enable */
export default store;
