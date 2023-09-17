import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'

import rootReducer from './store/reducers'

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// const eventLogger = (event: unknown, error: unknown) => {
//   console.log('onKeycloakEvent', event, error)
// }

// const tokenLogger = (tokens: unknown) => {
//   console.log('onKeycloakTokens', tokens)
// }


const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ReactKeycloakProvider 
        authClient={keycloak} 
        // onEvent={eventLogger}
        // onTokens={tokenLogger}
      >
        <App />
    </ReactKeycloakProvider>
    </BrowserRouter>
  </Provider>
);