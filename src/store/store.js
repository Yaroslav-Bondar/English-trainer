import {createStore} from 'redux';
import rootReducer from '@store/reducers';

const store = createStore(rootReducer);

console.log('from store', store.getState());

export default store;