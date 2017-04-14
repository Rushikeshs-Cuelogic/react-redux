import * as actionCreator from "../../src/app/actions/register-action";
import * as ActionType from '../../src/app/constants/actionTypes';
import { expect } from "chai";
describe('Action: register', () => {

    it('should be exists ', () => {
        expect(actionCreator.userRegisterRequest).to.exist;
    });

    it('should be a function ', () => {
        expect(actionCreator.userRegisterRequest).to.be.a('function');
    });

    it('returns an object with the type of actionTypes.REGISTER_USER ', () => {
        let userData = {
            username: "abc",
            password: "abc",
            email:"abc@cuelogic.com"
        }
        expect(actionCreator.userRegisterRequest(userData)) == { type: "REGISTER_USER" };
    });
});