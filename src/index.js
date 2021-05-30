import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
// [x] 1. Add in all necessary components and libary methods.
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

// [x] 2. Create a store that includes thunk and logger middleware support.
const store = createStore(reducer, applyMiddleware(thunk, logger));

// [x] 3. Wrap the App component in a react-redux Provider element. 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);


