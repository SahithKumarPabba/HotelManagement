const chai = require('chai');
const sinonChai = require('sinon-chai');
const auth = require('../../../src/api/middleware/auth');
const expect = chai.expect;

describe('get Token tests', () => {
    it('get Token and decode it to check if the data is same', () => {
        let data = '1518';
        let token = auth.getToken(data);
        let decodedData = auth.decodeToken(token);
        expect(data).to.eql(decodedData);
    });
})