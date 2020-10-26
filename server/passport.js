const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require('../model/user')
const bcrypt = require('bcrypt')
const  session = require('express-session')
const sessionStore = new session.MemoryStore;

module.exports  = () => {
passport.use(new Strategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async function (username, password, done) {

    console.log("passport", username, password);

    await User.findOne({ email: username }, function (err, user) {
      console.log("user", user, "error", err)
      if (err) { 
        return done(err); }
      if (!user) {
        console.log("errorpass", err);
        return done(null, false, { message: 'Incorrect username.' });
      }
      // let valid = false;

      // bcrypt.compare(password, user.password, function (err, result) {
      //   console.log("result_password", result, "~~~\n\n");
      //   // result == true
      //   valid = result;
      // });
      // if (!valid) {
      //   return done(null, false, { message: 'Incorrect password.' });}

      console.log("done",user)
      return done(null, user, {info: 'Flash is back!'});

    });
  }
));


passport.serializeUser(function (user, done) {
  console.log("done_se",user)
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  console.log("done_sde id",id)
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
}