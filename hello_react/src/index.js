import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let what = <App />
let where = document.getElementById('root')

ReactDOM.render(what,where);

registerServiceWorker();
