const { CustomAPIError } = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.status).json({ msg: err.message } );
  }
  return res.status(500).json({ msg: 'Something is wrong, please try again' });
};

module.exports = errorHandlerMiddleware;
