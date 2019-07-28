const chai = require('chai');
const sinonChai = require('sinon-chai');
const health = require('../../../src/api/controllers/health');

const mockReq = require('../mock/req.mock');
const mockRes = require('../mock/res.mock');

const expect = chai.expect;
chai.use(sinonChai);

describe('health controller', () => {
    it('When getHealth called it should return 200', () => {
      const req = mockReq();
      const res = mockRes();
  
      health.getHealth(req, res);
  
      expect(res.status).to.be.calledWith(200);
      expect(res.send).to.be.calledWith('OK');
    });
  });