import React from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { userSigninRequest } from "../actions/login-action";
import { SignInForm } from "../components/login";


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: { username: '', password: '' } }
    }

    handleChange(event) {
        const field = event.target.name;
        const credentials = this.state.user;
        credentials[field] = event.target.value;
        return this.setState({ user: credentials });
    }

    onLogin() {
        this.props.onLogin(this.state.user);
    }

    render() {
        return (
            <div>
                <SignInForm
                    onLogin={this.onLogin.bind(this)}
                    handleChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        onLogin: (data) => {
            dispatch(userSigninRequest(data))
        }
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(Login);

