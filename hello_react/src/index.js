import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Temperature from './Temperature.js'


// let what = <Temperature value = "80" />
let what = <App />
let where = document.getElementById('root')

ReactDOM.render(what,where);

// what = <Temperature value="90"/>
// where = document.getElementById('weather2')

// ReactDOM.render(what,where)

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
