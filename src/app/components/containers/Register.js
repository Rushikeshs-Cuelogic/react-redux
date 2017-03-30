import React from "react";
export class Register extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <input type="text" placeholder="Name" />
                    <hr />
                    <input type="text" placeholder="Email" />
                    <hr />
                    <input type="text" placeholder="Password" />
                    <hr />
                    <button className="btn btn-primary">Register</button>
                </div>

            </div>
        );
    }
}
