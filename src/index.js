import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './app/index';

import './app/static/reset.css';
import './app/static/index.css';

ReactDOM.render(<App />, document.querySelector('#js-root'));
registerServiceWorker();
