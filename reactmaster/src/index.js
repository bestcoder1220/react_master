import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Menu username="bestcoder2018" />, document.getElementById('HeaderMenu'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
