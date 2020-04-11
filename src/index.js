import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Stack from './components/Stack';

render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/stack' component={Stack} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
