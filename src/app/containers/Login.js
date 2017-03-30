import React from "react";
import { browserHistory } from "react-router";
export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                password: "rushi",
                email: "abc"
            }
        }
    }
    onLogin() {
        let username = this.refs.userId.value;
        let password = this.refs.password.value;
        if (username && password && this.state.user.email === username && this.state.user.password === password) {
            browserHistory.push("/profile/" + this.refs.userId.value + "/" + this.state.user.email);
        }
        else{
            alert('Please provide valid username or password');
        }
    }

    

    render() {
        return (
            <div className="container-fluid">
                  <input type="text" placeholder="Username" ref="userId"/>
                  <hr/>
                    <input type="Password" ref="password"  placeholder="Password"/>
                <hr/>
                    <button onClick={() => this.onLogin()} className="btn btn-primary">Login</button>
                <hr/>
            </div>
        );
    }
}
