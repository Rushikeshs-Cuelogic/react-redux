import React from "react";
import { Link } from "react-router";

export const Dashboard = (props) => {
    return (
        <div className="col-xs-10 col-xs-offset-1" >
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="http://www.cuelogic.com/">Cuelogic</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                             <li> <Link to={"/home"} activeClassName={"active"}>Home</Link></li>
                            <li><Link to={"/login"} activeClassName={"active"}>Login</Link> </li>
                            <li><Link to={"/register"} activeClassName={"active"}>Register</Link> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
}
