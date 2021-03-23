import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore, history } from 'redux/store/configureStore';
import Root from 'components/Root';
import 'styles/main.scss';
// import '~/fonts/fonts.scss';
// import '~/fonts/color.scss';

const { store } = configureStore() || {}

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

// reportWebVitals();
