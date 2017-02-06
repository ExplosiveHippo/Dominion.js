import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

import './scss/App.scss';
import BoardTable from './components/enviroments/BoardTable'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends Component {
  render() {
    return (<BoardTable store={store}/>);
  }
}

export default App;
