import React from 'react';

// material
import Paper from 'material-ui/Paper';
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const paperStyle = {
    height: 100,
    width: 300,
    margin: 'auto',
    textAlign: 'center',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
};

const inputStyle = {
    display: 'block',
    margin: 20,
};

export default class LoginComponent extends React.PureComponent {

    handleLogout = () => {
        this.props.logout();
    }

    render() {
        return (
            <Paper style={paperStyle}>
                <RaisedButton onClick={this.handleLogout} secondary label="Logout" style={inputStyle} />
            </Paper>
        );
    }
}
