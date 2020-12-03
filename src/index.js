import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reminders from './reducer/reducer'

const store = createStore(reminders)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)