const chai = require('chai');
const sinonChai = require('sinon-chai');
const availability = require('../../../src/api/controllers/availability');
const sinon = require('sinon');
const availabilityService = require('../../../src/api/services/availabilityService');

const mockReq = require('../mock/req.mock');
const mockRes = require('../mock/res.mock');

const expect = chai.expect;
chai.use(sinonChai);
const sandbox = sinon.createSandbox();

describe('availability controller tests', () => {
    it('test1 getAll test', () => {
        let availabilityServiceStub;
        availabilityServiceStub = sandbox.stub(availabilityService, 'getAll').returns('Success');
        let resposne = availability.getAll(mockReq, mockRes);
        expect(resposne).to.eql('Success');
        expect(availabilityServiceStub).to.be.calledWith(mockReq, mockRes);
    })
})