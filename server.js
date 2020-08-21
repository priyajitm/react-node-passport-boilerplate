const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

//----------------------------------------- END OF IMPORTS---------------------------------------------------

// Connect DB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.options('/api', function (req, res) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
//   res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
//   res.end();
// });

// var corsOptions = {
//   origin: 'http://localhost:3000',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };

app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(cookieParser('secretcode'));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passportConfig')(passport);

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes
app.use('/api', require('./routes/auth'));
app.use('/auth', require('./routes/auth'));

// app.get(
//   '/auth/google',
//   passport.authenticate('google', {
//     scope: ['profile', 'email'],
//   }),
// );

// app.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
//   res.send(req.user);
//   res.send('you reached the redirect URI');
// });

//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(4000, () => {
  console.log('Server Has Started');
});
