import React from "react";
import { browserHistory, Link } from "react-router";
import { connect } from "react-redux";

class Profile extends React.Component {
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


                <div className="row" className="col-xs-10 col-xs-offset-1" >
                    <label>User Id:{this.props.user.user.username}</label>
                    <hr />
                    <label>Email:{this.props.user.user.email}</label>
                    <hr />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile);



