const express = require('express');
const router = express.Router();
const User = require('../model/UserModel');
const bcrypt = require('bcryptjs');

const passport = require('passport');

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send('User Already Exists');
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        name: req.body.user,
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send('User Created');
    }
  });
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send('No User Exists');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send('Successfully Authenticated');
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.get('/user', (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

router.get('/logout', function (req, res) {
  req.logout();
  res.send('logeed out');
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send(req.user);
});

module.exports = router;
