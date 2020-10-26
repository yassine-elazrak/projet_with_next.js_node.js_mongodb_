const express = require('express');
const next = require('next');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const DB = require('./init')
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const User = require('../model/user')
const bcrypt = require('bcrypt')
const  session = require('express-session')
const sessionStore = new session.MemoryStore;


// const routes = {
//   auth: require('../routes/auth')
// }
const pss_port = require('./passport');
const routes = {
  auth: require('../routes/auth')
}
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express();


router = express.Router();
app.prepare().then(() => {
  // 
  DB();
  ///////////
 


  /////////
  pss_port();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(cors());
// server.use(require('express-session')({ secret: 'keyboard cat', 
//   resave: false, saveUninitialized: false }));  
  server.use(cookieParser('secret'));
server.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: false,
    resave: false,
    secret: 'keyboard cat'
}));
 
// app.use(express.session({
//   secret: 'a4f8071f-c873-4447-8ee2',
//   cookie: { maxAge: 2628000000 },
//   store: new (require('express-sessions'))({
//       storage: 'mongodb',
//       instance: mongoose, // optional
//       host: 'localhost', // optional
//       port: 27017, // optional
//       db: 'test', // optional
//       collection: 'sessions', // optional
//       expire: 86400 // optional
//   })
// }));
    // server.use(express.cookieParser('keyboard cat'));
    // server.use(express.session({ cookie: { maxAge: 60000 }}));
    server.use(flash());
 
  server.use(passport.initialize());
  server.use(passport.session());
  // app.use('/users', userRoute);

  server.use(function(err, req, res, next) {
    console.log("errror", err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
  });
  //   server.get('/server', (req, res) => {
  //     console.log('body;/server',"-----" , req.body);
  //     // const firstName = req.body.firstName
  //     res.send("hello");
  // });

  // server.get('/about', (req, res) => {

  //   console.log('about');

  //   res.redirect('/pages/about');
  // });

  // server.post('/auth/signup', (req, res) => {
  //   console.log('body///',req.body)
  //   return res.json({email: 'yassineazrak@gmsil.com'})


  //   //  res.send({'name':"firstName"})
  //   //  console.log("hana");


  // })
  // // server.post('/auth/signup', async (req, res) => {
  // //   var email = req.body.email
  // //   var password = req.body.password

  // //   console.log("\n\n\yassine",req.body,"\n\n");
  // //   if (email && password) {
  // //     bcrypt.hash(password, saltRounds).then(async function(hash) {
  // //       const results = await addUser(email, hash)
  // //       if (results && results.length > 0) {
  // //         bcrypt.hash(email + hash, saltRounds).then(function(hash) {
  // //           sendVerificationEmail(email, "http://" + req.headers.host + "/auth/verify?email=" + email + "&hash=" + hash)
  // //         })
  // //         return res.json({email: email})
  // //       } else {
  // //         return res.json({message: 'User already exists with email ' + email})
  // //       }
  // //     })
  // //   } else {
  // //     return res.json({message: 'Please enter email and Password!'})
  // //   }
  // // })

  // // server.post('/auth/signup', async (req, res) => {
  // //   var email = req.body.email
  // //   var password = req.body.password

  // //   console.log("\n\n\yassine",req.body,"\n\n");

  // // })
 server.use((req, res, next) => {
    req.flash('info', 'Flash is back!')
    res.locals.redirect = "/users/new";
    res.locals.flashMessages = req.flash();
    next();
    });

  server.get('/profile', (req, res) => {
    console.log("hello profile")
    console.log("flsh",res.locals);
    // console.log("session:" ,req.session)
    console.log("\n\n\n\n\nsession:" ,res)
    const queryParams = { id: 44 } 

    if (!req.isAuthenticated())
      app.render(req, res, '/login', queryParams)

    const actualPage = '/profile'
    app.render(req, res, actualPage, queryParams)
  })

  // app.get('/profile',
  // require('connect-ensure-login').ensureLoggedIn(),
  // function(req, res){
  //   res.render('profile', { user: req.user });
  // });

  // // server.get('/login', (req, res) => {
  // //   const actualPage = '/login'
  // //   const queryParams = { id: 44 } 
  // //   app.render(req, res, actualPage, queryParams)
  // // })

  // // routes.auth(server)


  // server.post('/auth/login', async (req, res) => {
  //   const email = req.body.email
  //   const password = req.body.password
  //   console.log(req.body);
  //   // return res.json({message: '/auth/login ' + email + password + " method post"})
  //   return res.json({email: 'yassineazrak@gmsil.com'})

  // })



  // server.post('/auth/signup',  (req, res) => {
  //   var email = req.body.email
  //   var password = req.body.password
  // console.log("kkkkk")
  //   return res.json({message: "/auth/signup  method post"})

  // })


  routes.auth(server,app)
  server.get('*', (req, res) => {

    return handle(req, res)
  });


  server.listen(4000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:4000')
  })
})



