const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('config');
const User = require('../database/models/users')();

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: config.secretOrKey,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderWithScheme('jwt')
    },
    (jwtPayload, next) => {
      User.findOne({ where: { id: jwtPayload.id } }).then(user => {
        if (user) {
          next(null, user);
        } else {
          next(null, false);
        }
      });
    }
  )
);

console.log('passport configuration done !');

module.exports = {
  passport
};
