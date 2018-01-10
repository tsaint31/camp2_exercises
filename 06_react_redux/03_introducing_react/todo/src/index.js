import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Tasklist from './Task';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<Tasklist />, document.getElementById('root2'));
registerServiceWorker();
