import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollTop from './components/ScrollTop/ScrollTop';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollTop>
                <App/>
            </ScrollTop>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('page')
);
