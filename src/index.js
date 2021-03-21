import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './redux/reducers/index';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);