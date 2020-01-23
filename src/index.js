import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {addReducer} from './reducers/addReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');

const store = createStore(addReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
