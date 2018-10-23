const _ = require('lodash');

module.exports = function bodyChecker(valueInBody) {
  return (req, res, next) => {
    if (_.has(req.body, valueInBody)) {
      next();
    } else {
      res.status(400).json({
        message: `Need all values in body (${_.reduce(
          valueInBody,
          (accumulator, currentItem) => accumulator + currentItem
        )})`
      });
    }
  };
};
