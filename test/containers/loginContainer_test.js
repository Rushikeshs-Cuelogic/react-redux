import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Login from "../../src/app/containers/login";
import thunk from 'redux-thunk';
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login component', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            user: {},
            registeredUser: {}
        });
    });

    it('Contains 2 input field', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        expect(
            wrapper.find('input').getNodes().length
        ).equal(2)
       
    });
        
    it('contains username initial value empty', () => {

        const wrapper = mount(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        wrapper.setState({
            user: {
                name: '',
                password: ''
            },
            registeredUser: {
                name: '',
                password: '',
                email:''
            }
         });
         
        expect(
            wrapper.state('user').nam
        ).to.equal('')
    });
});