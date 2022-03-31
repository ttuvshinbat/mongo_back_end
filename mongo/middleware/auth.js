const jwt = require("jsonwebtoken");
const config = process.env;
const verifyToken = (req, res, next) => {
  const data = req.body;
  const token =
    req.body.token || req.query.token || req.headers["x-acces-token"];
  if (!token) {
    return res
      .status(403)
      .json({ success: false, message: "token oruulah shaardlagtai" });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "hereglegchiin token buruu baina" });
  }
  return next();
};

module.exports = verifyToken;
