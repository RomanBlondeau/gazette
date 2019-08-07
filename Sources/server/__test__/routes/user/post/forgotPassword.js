const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../../src/index');

const should = chai.should(); // eslint-disable-line no-unused-vars

chai.use(chaiHttp);

describe('/POST user/forgotPassword', () => {
  it('it should returns need all values in body', done => {
    chai
      .request(app)
      .post('/user/forgotPassword')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should returns not found', done => {
    chai
      .request(app)
      .post('/user/forgotPassword')
      .send({ email: 'toto' })
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.equal('Not found.');
        done();
      });
  });
});
