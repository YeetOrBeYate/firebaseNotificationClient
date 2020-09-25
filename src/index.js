import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.scss";
import App from './App';
import { Provider } from 'react-redux'
import { registerServiceWorker } from './fakeServiceWorker'
// import * as serviceWorker from './serviceWorker';
import store from './Redux/store';



ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker()