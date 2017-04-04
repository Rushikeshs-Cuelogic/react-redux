import React from 'react';
export const SignInForm = (props) => {
    return (
        <div className="container">
            <div className="form-group">
                <label className="control-label">Username</label>
                <input type="text" placeholder="Username" className="form-control" value={props.username} />
            </div>
            <div className="form-group">
                <label className="control-label">Password</label>
                <input type="Password" placeholder="Password" className="form-control" value={props.password} />
            </div>
            <div className="form-group">
                <button onClick={props.onLogin} className="btn btn-primary">Login</button>
            </div>
        </div>

    );
}