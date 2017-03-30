import React from "react";
import {Link} from "react-router";

export const Dashboard = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/login"} activeClassName={"active"}>Login</Link> </li>
                        <li><Link to={"/register"} activeClassName={"active"}>Register</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
