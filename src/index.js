import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './imports.css';

import store from './Redux/ReduxStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}><App /></Provider>
);