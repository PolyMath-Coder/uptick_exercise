const express = require('express');
const { json, urlencoded } = express;
const { connectToDatabase } = require('./config/mongoose');
const { errorConverter, errorHandler } = require('./helpers/asyncError');
const passport = require('passport');
require('dotenv').config();
const { PORT } = require('./config/keys');
const logger = require('./helpers/logger');
// require('./auth/auth.service')(passport);
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

// app.use('/api', require('./routes/routes'));
const oneDay = 24 * 60 * 60 * 365 * 1000;
app.get('/', (req, res) => {
  res
    .status(200)
    .json({
      message:
        "You're welcome on Board to Uptick Talent Institute Backend Assessment Test!",
    });
});

connectToDatabase();

app.use(errorConverter);
app.use(errorHandler);

module.exports = app.listen(PORT, () => {
  logger.info(`Server now live at the port ${PORT}`);
});
