import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.scss";
import App from './App';
import { registerServiceWorker } from './fakeServiceWorker'

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker()
