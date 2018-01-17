import React from 'react';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import slackApp from './reducers';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



let store = createStore(slackApp)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
