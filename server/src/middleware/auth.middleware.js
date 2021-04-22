const tokenHelper = require("../helper/token.helper");

exports.auth = async (req, res, next) => {
  try {
    let token = "";

    if (req.headers.authorization != undefined) {
      token = req.headers.authorization.split(" ")[1];
    }

    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = tokenHelper.verifyToken(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = tokenHelper.decodeToken(token, "test");

      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
