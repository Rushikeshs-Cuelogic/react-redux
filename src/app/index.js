import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { render } from "react-dom";
import { Root } from "./components/root";
import { Dashboard } from "./components/dashboard";
import Login from "./containers/login";
import Register from "./containers/register";
import Profile from "./containers/profile";
import store from "./store";
import { Home } from "./components/Home";

import { Provider } from "react-redux";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <Route path="home" component={Home} />
                    <Route path="login" component={Login} />
                    <Route path="register" component={Register} />
                    <Route path="signOut" component={Home} />
                </Route>
                <Route path="profile" component={Profile} />
                <Route path="dashboard" component={Dashboard} />

            </Router>
        );
    }
}


render(<Provider store={store}>
    <App /></Provider>,
    document.getElementById('appDiv-wrapper'));
