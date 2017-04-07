import React from 'react';
export const RegistrationForm = (props) => {
    return (

        <div className="col-xs-10 col-xs-offset-1" >
            <div> Username: <input type="text" placeholder="Name" name="username" value={props.username} className="form-control" onChange={props.handleChange} /></div>
            <br />
            <div>Email: <input type="text" placeholder="Email" name="email" value={props.email} className="form-control" onChange={props.handleChange} /></div>
            <br />
            <div>Password: <input type="text" placeholder="Password" name="password" value={props.password} className="form-control" onChange={props.handleChange} /></div>
            <br />
            <button className="btn btn-primary" onClick={props.onRegister} > Register</button>
        </div>

    );
}

RegistrationForm.propTypes = {
    handleChange: React.PropTypes.func,
    onRegister: React.PropTypes.func
};