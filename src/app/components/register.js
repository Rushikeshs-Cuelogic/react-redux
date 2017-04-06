import React from 'react';
export const RegistrationForm = (props) => {
    return (
        <div className="container">
            <div className="row" className="col-xs-10 col-xs-offset-1" >

                <label className="control-label">Username</label>
                <input type="text" placeholder="Name" name="username" value={props.username} className="form-control" onChange={props.handleChange} />

                <label className="control-label">Email</label>
                <input type="text" placeholder="Email" name="email" value={props.email} className="form-control" onChange={props.handleChange} />

                <label className="control-label">Password</label>
                <input type="text" placeholder="Password" name="password" value={props.password} className="form-control" onChange={props.handleChange} />
                    <br/>
                <button className="btn btn-primary" onClick={props.onRegister} > Register</button>

            </div>
        </div>

    );
}

RegistrationForm.propTypes = {
    handleChange: React.PropTypes.func,
    onRegister: React.PropTypes.func
};