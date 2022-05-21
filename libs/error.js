const Error = (err, type, code) => {
  const error = {
    message: err,
    type,
    code,
  };
};

module.exports = Error;
