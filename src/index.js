import React from 'react';
import ReactDOM from 'react-dom';
// Bootstrap
// import 'bootstrap'; // Bootstrap Js if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
