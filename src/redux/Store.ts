import { createStore, Store, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


/* eslint-disable no-underscore-dangle */

const store: Store<any, any> = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
// (window as any).__REDUX_DEVTOOLS_EXTENSION__(),


/* eslint-enable */
export default store;
