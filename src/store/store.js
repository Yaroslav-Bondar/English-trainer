import {createStore} from 'redux';
import rootReducer from '@store/reducers';

const store = createStore(rootReducer);

store.subscribe(() => console.log('from store =', store.getState()));
console.log('from store', store.getState());

export default store;