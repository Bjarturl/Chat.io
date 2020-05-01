import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import '../styles/site.css';

ReactDOM.render(<Provider store={ createStore(reducers, applyMiddleware(thunk)) }><App /></Provider>, document.getElementById('app'));
