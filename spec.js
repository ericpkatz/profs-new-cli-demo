const app = require('supertest')(require('./app'));
const { expect } = require('chai');
const db = require('./db');

describe('Our Application', ()=> {
  beforeEach(()=> db.syncAndSeed());
  it('true is true', ()=> {
    expect(true).to.equal(true);
  });
  describe('GET /', ()=> {
    it('returns a 200 with foo', async()=> {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.body.name).to.contain('foo');
    });
  });
});
