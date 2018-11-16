/* eslint-disable no-restricted-syntax */
const _ = require('lodash');

module.exports = function paramChecker(valueInUrl) {
  return (req, res, next) => {
    for (const value of valueInUrl) {
      if (!_.has(req.params, value)) {
        return res.status(400).json({
          message: `Need all values in url params (${_.reduce(
            valueInUrl,
            (accumulator, currentItem) => `${accumulator} ${currentItem}`
          )})`
        });
      }
    }
    return next();
  };
};
