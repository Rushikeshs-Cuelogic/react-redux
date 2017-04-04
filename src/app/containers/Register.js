import React from "react";
import { connect } from "react-redux";
import { userRegisterRequest } from "../actions/register-action";
import { RegistrationForm } from "../components/register";

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registeredUser: { username: '', email: '', password: '' }
        }
    }

    handleChange(event) {
        const field = event.target.name;
        const credentials = this.state.registeredUser;
        credentials[field] = event.target.value;
        return this.setState({ registeredUser: credentials });
    }

    onRegister() {
        this.props.onRegister(this.state.registeredUser);
    }
    render() {
        return (
            <div>
                <RegistrationForm
                    onRegister={this.onRegister.bind(this)}
                    handleChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registeredUser: state.registeredUser
    }
}


const matchDispatchToProps = (dispatch) => {
    return {
        onRegister: (data) => {
            dispatch(userRegisterRequest(data))
        }
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(Register);
