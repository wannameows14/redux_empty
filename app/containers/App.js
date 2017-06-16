import React from 'react';
import { connect } from 'react-redux';

import {
    LOGIN_SAGA,
    LOGOUT,
} from '../constants/actions';

import LoginComponent from '../components/auth/LoginComponent';
import LogoutComponent from '../components/auth/LogoutComponent';

class App extends React.PureComponent {

    render() {
        const Res = (
            this.props.Auth ?
                <LogoutComponent logout={this.props.logout} /> :
                <LoginComponent login={this.props.login} />
        );
        return (
            <span>
                {Res}
            </span>
        );
    }
}

function mapStateToProps(state) {
    return {
        Auth: state.get('data').get('Auth'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login(username, password) {
            dispatch({
                type: LOGIN_SAGA,
                username,
                password,
            });
        },
        logout() {
            dispatch({
                type: LOGOUT,
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
