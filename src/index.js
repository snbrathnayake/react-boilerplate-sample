import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'components/Root';
import { configureStore, history } from 'redux/store/configureStore';
import 'styles/main.scss';


const { store } = configureStore() || {}

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

// reportWebVitals();
