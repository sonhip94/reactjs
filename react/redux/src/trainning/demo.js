import {createStore} from 'redux';
import {status, sort} from './actions/index'
//tao new state
import myReducer from './reducers/index'


const store = createStore(myReducer);
console.log('Default:',store.getState()); 
// thay doi status


store.dispatch(status());

console.log('TOGGLE_STATUS:',store.getState()); 


store.dispatch(sort({
	by: 'tuoi',
	value: -1
}));
console.log('SORT:',store.getState()); 

