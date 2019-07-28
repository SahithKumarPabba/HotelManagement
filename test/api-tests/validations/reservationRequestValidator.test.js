const chai = require('chai');
const sinonChai = require('sinon-chai');
const reservationValidator = require('../../../src/api/validations/reservationRequestValidator');
const expect = chai.expect;
const sinon = require('sinon');
chai.use(sinonChai);
const sandbox = sinon.createSandbox();

const mockReq = require('../mock/req.mock');
const mockRes = require('../mock/res.mock');

describe('request validation tests', () => {
    it('validate request', () => {
        reservationValidator.validateRequest(mockReq)
            .catch((err) => {
                expect(err).to.eql('UserId must be provided');
            })
    })

    it('validate request- test2', () => {
        mockReq.body = {};
        mockReq.body.UserId = 10;
        reservationValidator.validateRequest(mockReq)
            .catch((err) => {
                expect(err).to.eql('UserId must be provideds');
            })
    })
})