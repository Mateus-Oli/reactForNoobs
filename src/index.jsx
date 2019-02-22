import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import store from './providers/store';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector('#root')
);
