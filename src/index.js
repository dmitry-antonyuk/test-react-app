import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/Header/Header';
import Subnav from './components/Subnav/Subnav';
import Content from './components/Content/Content';
import Sidemenu from './components/Sidemenu/Sidemenu';
import './css/icomoon.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Header />
        <Subnav />
        <Content />
        <Sidemenu />
    </div>, document.getElementById('root'));

registerServiceWorker();
