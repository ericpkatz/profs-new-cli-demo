const app = require('supertest')(require('./app'));
const { expect } = require('chai');

describe('Our Application', ()=> {
  it('true is true', ()=> {
    expect(true).to.equal(true);
  });
  describe('GET /', ()=> {
    it('returns a 200 with foo', async()=> {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.contain('foo');
    });
  });
});
