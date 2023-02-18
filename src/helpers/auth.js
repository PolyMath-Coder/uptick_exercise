const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');
const userAuthentication = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (!bearerHeader) {
    res.status(403).json({
      status: 'access denied',
      msg:
        "Oops! Something sure went wrong... You're likely not authenticated!",
    });
    return;
  }
  const bearer = bearerHeader.split(' ');
  const [tops, token] = bearer;
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      res.status(401).json({
        status: 'access denied',
        msg: 'Oops! Your token might be expired...',
      });
      return;
    } else {
      req.user = decodedToken.user;
      return next();
    }
  });
};

module.exports = { userAuthentication };
