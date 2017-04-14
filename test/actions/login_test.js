import * as actionCreator from "../../src/app/actions/login-action";
import * as ActionType from '../../src/app/constants/actionTypes';
import { expect } from "chai";
describe('Action: login', () => {

    it('should be exists ', () => {
        expect(actionCreator.userSigninRequest).to.exist;
    });

    it('should be a function ', () => {
        expect(actionCreator.userSigninRequest).to.be.a('function');
    });

    it('returns an object with the type of actionTypes.AUTH_USER ', () => {
        let userData = {
            username: "abc",
            email: "abc"
        }
        expect(actionCreator.userSigninRequest(userData)) == { type: "AUTH_USER" };
    });
});