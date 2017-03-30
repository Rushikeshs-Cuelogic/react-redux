import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { render } from "react-dom";
import { Root } from "./components/Root";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/containers/Login";
import { Register } from "./components/containers/Register";
import { Profile } from "./components/containers/Profile";
import { createStore } from "redux";
import AllReducers from "./reducers";
import { Provider } from "react-redux";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <Route path="login" component={Login} />
                    <Route path="register" component={Register} />
                    <Route path="signOut" component={Root} />
                </Route>
                <Route path="profile/:userId/:email" component={Profile} />
            </Router>
        );
    }
}

const store = createStore(AllReducers);
render(<Provider store={store}>
    <App /></Provider>,
    document.getElementById('appDiv-wrapper'));
