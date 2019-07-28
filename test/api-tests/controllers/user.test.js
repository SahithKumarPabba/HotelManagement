const chai = require('chai');
const sinonChai = require('sinon-chai');
const user = require('../../../src/api/controllers/user');
const sinon = require('sinon');
const userService = require('../../../src/api/services/userinfoService');

const mockReq = require('../mock/req.mock');
const mockRes = require('../mock/res.mock');

const expect = chai.expect;
chai.use(sinonChai);
const sandbox = sinon.createSandbox();

describe('user controller tests', () => {
    it('test1 getByName test', () => {
        let userServiceStub;
        userServiceStub = sandbox.stub(userService, 'getByName').returns('Success');
        let resposne = user.getByName(mockReq, mockRes);
        expect(resposne).to.eql('Success');
        expect(userServiceStub).to.be.calledWith(mockReq, mockRes);
    })
})