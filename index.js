import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducer/reducerContador';
import reducerBook from './reducer/reducerBook';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

const combined = combineReducers({reducer,reducerBook});
const store = createStore(combined);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
