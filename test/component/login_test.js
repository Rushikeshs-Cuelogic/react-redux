import React, { Component } from "react";
var assert = require('assert');
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import { SignInForm } from "../../src/app/components/login";
import sinon from 'sinon';

describe("Component:SignInForm", (prop) => {
    let props;
    let wrapper;
    let textField;
    let sandbox;
    let LoginButton;
    before(() => {
        sandbox = sinon.sandbox.create();

        props = {
            userSigninRequest: sandbox.spy(),
            handleChange: () => { },
            onLogin: sandbox.spy(),

        }

        wrapper = shallow(<SignInForm  {...props} />);
        textField = wrapper.find("input");
        LoginButton = wrapper.find("button");
    });

    it('render without exploading ', () => {
        expect(wrapper.length).equal(1)
    });

    it("SignInForm should exist", () => {
        expect(wrapper).to.exist;
    });


    it("should render two textfileds ", () => {
        expect(textField).to.have.length(2);
    });

    it("should render one button ", () => {
        expect(LoginButton).to.have.length(1);
    });


    it("login clicks, submit form", () => {
        LoginButton.simulate("click");
        let user = {
            username: "abc",
            password: "abc"
        }
        props.onLogin(user);
        sinon.assert.calledTwice(props.onLogin);
    });
});