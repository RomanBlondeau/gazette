const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../../src/index');

const should = chai.should(); // eslint-disable-line no-unused-vars

chai.use(chaiHttp);

describe('/POST user/register', () => {
  it('it should returns need all values in body', done => {
    chai
      .request(app)
      .post('/user/register')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should returns not Invalid arguments', done => {
    chai
      .request(app)
      .post('/user/register')
      .send({
        username: 'toto',
        email: 'toto',
        firstName: 'Nicolas',
        lastName: 'Menettrier',
        password: 'toto'
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.equal(
          'Invalid arguments. Password need to be at least 8 characters long. ' +
            'The email is maybe incorrect.'
        );
        done();
      });
  });
});
