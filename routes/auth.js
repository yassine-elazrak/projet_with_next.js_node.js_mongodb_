
const Users = require('../model/user')
const bcrypt = require('bcrypt')
const passport = require('passport');

module.exports = (server,app) => {

  if (server === null) {
    throw new Error('server should be an express instance')
  }

  server.post('/auth/signup', (req, res) => {
    console.log('body///', req.body)
    Users.create(req.body)
      .then(subscriber => console.log(subscriber))
      .catch(error => console.log(error))
    return res.json({ email: 'yassineazrak@gmsil.com' })


    //  res.send({'name':"firstName"})
    //  console.log("hana");


  })

  // server.post('/auth/login', async (req, res) => {
  //   const email = req.body.email
  //   const password = req.body.password
  //   console.log("login", req.body)
  //   Users.find({ email: email }, function (err, result) {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       console.log("data_login", result, "  ``` ", result[0].password);
  //       bcrypt.compare(password, result[0].password, function (err, result) {
  //         console.log("result_password", result, "~~~\n\n");
  //         // result == true
  //       });
  //       return res.json(result[0]);
  //     }
  //   });
  //   // console.log("login === ", req.body)
  //   // return res.json({message: '/auth/login ' + email + password + " method post"})
  // })


  // server.post('/auth/login', passport.authenticate('local'), (req, res) => {
  //   // const email = req.body.email
  //   // const password = req.body.password
  //   // console.log("login", req.body)
  //   // Users.find({ email: email }, function (err, result) {
  //   //   if (err) {
  //   //     res.send(err);
  //   //   } else {
  //   //     console.log("data_login", result, "  ``` ", result[0].password);
  //   //     bcrypt.compare(password, result[0].password, function (err, result) {
  //   //       console.log("result_password", result, "~~~\n\n");
  //   //       // result == true
  //   //     });
  //   //     return res.json(result[0]);
  //   //   }
  //   // });
  //   console.log("res for page login 44")
  //   console.log("uusser", req.isAuthenticated());
  //   // console.log(req"falshhh",req.flash(info));
  //   if (req.user)
  //       return res.json({suc:"yasinesuc"});
  //   else
  //        return res.json({suc:"yasinefaild"});



  // });

server.post('/auth/login', (req, res, next) => {
  // Provided by connect-ensure-login function
  let returnURL = req.session.returnTo
  console.log("ReturnURL:", returnURL);
  console.log("Req Method:", req.method);
  console.log("Req URL:", req.url);
  passport.authenticate('local', (err, user, info) => {
    console.log("userii",user)
    console.log("info", info);
    console.log("erorr" , err)
    if (err) {
      // Authentication failed - Error 500 - Server Error
      return next(err);
    }
    if (!user) {
      // Authentication failed - Error 401 Missing Credentials
      return res.status(401).json(info)
    }
    req.login(user, (err) => {
      if (err) { return next(err); }
      // Trigger User Login - not working!
      return res.json({suc:"yasinefaild"});
      // return res.redirect('/profile');
    });
  })(req, res, next)
});

server.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
    // return app.render(req, res, '/')
  }
)



  // server.post('/auth/signup', async (req, res) => {
  //   var email = req.body.email
  //   var password = req.body.password

  //   return res.json({message: '/auth/signup ' + email + password + " method post"})

  // })


}