import React from "react";
import { connect } from "react-redux";
import { userRegisterRequest } from "../actions/register-action";
class Register extends React.Component {
    constructor(props) {
        super();
    }
    onRegister() {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        let email = this.refs.email.value;
        var registeredUser = {
            username: username,
            email: email,
            password: password
        };
        this.props.onRegister(registeredUser);
    }
    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" placeholder="Name" ref="username" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input type="text" placeholder="Email" ref="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input type="text" placeholder="Password" ref="password" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={() => this.onRegister()} > Register</button>
                </div>
            </div>

        );
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        onRegister: (data) => {
            dispatch(userRegisterRequest(data))
        }
    }
}
export default connect(null, matchDispatchToProps)(Register);





