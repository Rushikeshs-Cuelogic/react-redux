import React from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { userSigninRequest } from "../actions/login-action"

class Login extends React.Component {
    constructor(props) {
        super();
    }

    onLogin() {
        let username = this.refs.userId.value;
        let password = this.refs.password.value;
        var user = {
            username: username,
            password: password
        };
        this.props.onLogin(user);
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" placeholder="Username" required ref="userId" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input type="Password" ref="password" placeholder="Password" className="form-control" />
                </div>
                <div className="form-group">
                    <button onClick={() => this.onLogin()} className="btn btn-primary">Login</button>
                </div>
            </div>

        );
    }
}


const matchDispatchToProps = (dispatch) => {
    return {
        onLogin: (data) => {
            dispatch(userSigninRequest(data))
        }
    }
}
export default connect(null, matchDispatchToProps)(Login);

