import React from 'react';
export const SignInForm = (props) => {
    return (
        <div className="col-xs-10 col-xs-offset-1" >
            <div> Username: <input type="text" placeholder="Username" className="form-control" name="username"  value={props.username} onChange={props.handleChange} required  /></div><br />
            <div> Password: <input type="Password" placeholder="Password" className="form-control" name="password" value={props.password} onChange={props.handleChange} required  /></div><br />
            <button onClick={props.onLogin} className="btn btn-primary">Login</button>
        </div>
    );
}

SignInForm.propTypes = {
    handleChange: React.PropTypes.func,
    onLogin: React.PropTypes.func
};