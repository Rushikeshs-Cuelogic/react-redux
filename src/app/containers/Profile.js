import React from "react";
import { browserHistory, Link } from "react-router";
export class Profile extends React.Component {
    onLogOut() {
        browserHistory.push("/");
    }
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li><Link to={"/"} activeClassName={"active"}>Logout</Link> </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr />
                <label>User Id:{this.props.params.userId}</label>
                <hr />
                <label>Email:{this.props.params.email}</label>
                <hr />
            </div>
        );
    }
}
Profile.propTypes = {
    userId: React.PropTypes.string,
    email: React.PropTypes.string
};


