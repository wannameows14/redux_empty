import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppContainer from './containers/App';

import configureStore from './store';
// import { isLogged } from './auth';

injectTapEventPlugin();

// function isLoggedIn(nextState, replace, callback) {
//     const isUserLogged = isLogged();
//     if (isUserLogged) return callback();
//     console.log('logout');
// }

const store = configureStore();

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer />
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);
