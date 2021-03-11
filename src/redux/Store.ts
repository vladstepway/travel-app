import { createStore, Store } from 'redux';
import rootReducer from './reducers/rootReducer';

const store: Store<any, any> = createStore(rootReducer);

export default store;
