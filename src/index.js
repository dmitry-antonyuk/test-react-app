import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/Header/Header';
import Subnav from './components/Subnav/Subnav';


import './css/icomoon.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="all-content">
        <Header />
        <Subnav />

    </div>, document.getElementById('root'));

registerServiceWorker();
