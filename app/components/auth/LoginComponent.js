import React from 'react';

//  material
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const paperStyle = {
    height: 230,
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
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleLogin = () => {
        this.props.login(this.state.username, this.state.password);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Paper style={paperStyle}>
                <TextField
                    name="username"
                    hintText="Username"
                    style={inputStyle}
                    onChange={this.handleChange}
                    value={this.state.username}
                />
                <TextField
                    name="password"
                    hintText="Password"
                    style={inputStyle}
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                />
                <RaisedButton onClick={this.handleLogin} label="Login" primary style={inputStyle} />
            </Paper>
        );
    }
}
