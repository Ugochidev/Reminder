const { jwtVerify } = require("../libs/jwt");
const Response = require("../libs/response");
const Error = require("../libs/error");

const validateUserToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    let result;
    if (authHeader) {
      const token = req.headers.authorization.split(" ")[1];
      result = jwtVerify(token);
      if (!result) {
        throw Error("Invalid bearer token", "BAD REQUEST", 400);
      } else {
        req.user = result;
        next();
      }
    } else {
      throw Error("Authorization header is required", "BAD REQUEST", 400);
    }
  } catch (err) {
    return Response(res).error(err, 500);
  }
};

const validateAdmin = (req, res, next) => {
  try {
    const { role } = req.user;
    console.log(role);
    if (role === "Admin") {
      next();
    } else {
      throw Error("You are not authorised to access this route", "", 401);
    }
  } catch (err) {
    return Response(res).error(err, 500);
  }
};

module.exports = { validateUserToken, validateAdmin };
