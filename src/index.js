import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./configure.js";
import {persistor} from "./configure.js";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.render(
  <Provider store={store}>
  {/* <BrowserRouter> */}
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
  {/* </BrowserRouter> */}
  </Provider>,
  document.getElementById('root')
);
