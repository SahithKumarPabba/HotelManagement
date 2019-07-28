const chai = require('chai');
const sinonChai = require('sinon-chai');
const reservation = require('../../../src/api/controllers/reservation');
const sinon = require('sinon');
const reservationService = require('../../../src/api/services/reservationService');
const reservationRequestValidator = require('../../../src/api/validations/reservationRequestValidator');

const mockReq = require('../mock/req.mock');
const mockRes = require('../mock/res.mock');

const expect = chai.expect;
chai.use(sinonChai);
const sandbox = sinon.createSandbox();

describe('reservation controller tests', () => {
    it('test1 getAll test', () => {
        let reservationRequestValidatorStub;
        let reservationServiceStub;
        mockReq.body = {};
        mockReq.body.roomId = 10;
        mockReq.body.quantity = 1;
        reservationRequestValidatorStub = sandbox.stub(reservationRequestValidator, 'validateRequest').rejects();
        reservationRequestValidatorStub = sandbox.stub(reservationRequestValidator, 'isValidUser').resolves('Success1');
        reservationRequestValidatorStub = sandbox.stub(reservationRequestValidator, 'isValidRoom').resolves('Success2');
        reservationServiceStub = sandbox.stub(reservationService, 'makeReservation').resolves('RESERVED');
        reservation.makeReservation(mockReq, mockRes);
        expect(reservationServiceStub).not.to.be.called;
    })
})