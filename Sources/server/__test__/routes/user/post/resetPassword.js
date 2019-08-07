const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../../src/index');

const should = chai.should(); // eslint-disable-line no-unused-vars

chai.use(chaiHttp);

describe('/POST user/resetPassword', () => {
  it('it should returns need all values in body', done => {
    chai
      .request(app)
      .post('/user/resetPassword')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should returns wrong reset token', done => {
    chai
      .request(app)
      .post('/user/resetPassword')
      .send({
        resetToken: 'ahah',
        newPassword: 'toto'
      })
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.equal('Wrong resetToken.');
        done();
      });
  });
});
