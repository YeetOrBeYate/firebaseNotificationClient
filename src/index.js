import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.scss";
import App from './App';
import { Provider } from 'react-redux'
import { registerServiceWorker } from './fakeServiceWorker'
// import * as serviceWorker from './serviceWorker';
import store from './Redux/store';

if ('serviceWorker' in navigator) {
  console.log('Trying to register custom sw');
  navigator.serviceWorker
    .register('./firebase-messaging-sw.js')
    .then(function (registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function (err) {
      console.log('Service worker registration failed, error:', err);
    });
}

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker()