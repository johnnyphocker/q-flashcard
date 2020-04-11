import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { setStack } from './actions';

import App from './components/App';
import Stack from './components/Stack';
import StackForm from './components/StackForm';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));
// store.dispatch(setStack({id: 0, title: 'hola', cards: []}));

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/stack' component={Stack} />
                <Route exact path='/stack_form' component={StackForm} />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
