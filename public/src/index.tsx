import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';
import injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

import './components/base.less';
import App from './containers/app';
import reducer from './reducers';

const store = createStore(reducer,null, applyMiddleware(ReduxThunk));

ReactDOM.render<any>(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
