import React from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { userSigninRequest } from "../actions/login-action";
import { SignInForm } from '../components/login';

class Login extends React.Component {
    constructor(props) {
        console.log(props);
        super();
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
    }

    handleChange(event){
        const field = event.target.name;
        const credentials = this.state.user;
        user[field] = event.target.value;
        return this.setState({ user: user });
    }

    onLogin() {
        console.log("login",this.state.user)
        this.props.onLogin(this.state.user);
    }

    render() {
        return (
            <div>
                <SignInForm
                    onLogin={this.onLogin}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}
/*<div className="container">
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
           </div>*/
const mapStateToProps = (state) => {
    return {
        user: state.user,
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

