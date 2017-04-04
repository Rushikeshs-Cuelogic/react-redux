import React from 'react';
export const SignInForm = (props) => {
    return (
        <div className="container">
            <div className="form-group">
                <label className="control-label">Username</label>
                <input type="text" placeholder="Username" className="form-control" name="username" value={props.username} onChange={props.handleChange}/>
            </div>
            <div className="form-group">
                <label className="control-label">Password</label>
                <input type="Password" placeholder="Password" className="form-control" name="password" value={props.password} onChange={props.handleChange} />
            </div>
            <div className="form-group">
                <button onClick={props.onLogin} className="btn btn-primary">Login</button>
            </div>
        </div>

    );
}

SignInForm.propTypes = {
    handleChange: React.PropTypes.func,
    onLogin:React.PropTypes.func
};