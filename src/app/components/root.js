import React from "react";
import { Dashboard } from "./dashboard";
export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Dashboard>
                    </Dashboard>
                </div>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}