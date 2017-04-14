import React, { Component } from "react";
var assert = require('assert');
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import { RegistrationForm } from "../../src/app/components/register";
import sinon from 'sinon';

describe("Component: login", (prop) => {
    let props;
    let wrapper;
    let textField;
    let sandbox;
    let registrationButton;
    before(() => {
        sandbox = sinon.sandbox.create();

        props = {
            userRegisterRequest: sandbox.spy(),
            handleChange: () => { },
            onRegister: sandbox.spy(),

        }

        wrapper = shallow(<RegistrationForm  {...props} />);
        textField = wrapper.find("input");
        registrationButton = wrapper.find("button");
    });

    it('render without exploading ', () => {
        expect(wrapper.length).equal(1)
    });

    it("SignInForm should exist", () => {
        expect(wrapper).to.exist;
    });


    it("should render three textfileds ", () => {
        expect(textField).to.have.length(3);
    });

    it("should render one button ", () => {
        expect(registrationButton).to.have.length(1);
    });


    it("login clicks, submit form", () => {
        registrationButton.simulate("click");
        let user = {
            username: "abc",
            password: "abc",
            email:"abc@cuelogic.com"
        }
        props.onRegister(user);
        sinon.assert.calledTwice(props.onRegister);
    });
});