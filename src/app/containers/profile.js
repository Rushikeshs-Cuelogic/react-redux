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
                <div className="col-xs-10 col-xs-offset-1" >
                    <nav className="navbar navbar-inverse">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="http://www.cuelogic.com/">Cuelogic</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to={"/"} activeClassName={"active"}>Logout</Link> </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="row" className="col-xs-10 col-xs-offset-1" >
                        <label>User Id:{this.props.user.user.username}</label>
                        <hr />
                        <label>Email:{this.props.user.user.email}</label>
                        <hr />
                    </div>
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



