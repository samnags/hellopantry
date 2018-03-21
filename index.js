const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Using the cookie session middleware
// Extracts user data and then assigns it to req.session
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// Middlewares
// Passport pulls reelvant data out of req.session and pass it to desereialize
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Hello!');
});

require('./routes/authRoutes')(app);
// authRoutes is exporting an a function. Here we're executing that function with the argument of app

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Running on port', PORT);
});
