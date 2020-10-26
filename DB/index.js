
	
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const employees = require("../model/user");
const router = express.Router();
const port = 4000;
const db = require('./db');
// var uri = 'mongodb://localhost:27017/test';

// mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

// const connection = mongoose.connection;

// connection.once("open", function() {
//   console.log("MongoDB database connection established successfully");
// });
// employees.deleteMany({}).then(() =>{
//   console.log('data   delete');
// });

// db();
app.use(bodyParser.urlencoded({ extended: true }))
 app.use(bodyParser.json())
// app.use("/", router);
app.post("/insert",function (req,res){
  console.log("kkllll",req.body);
  employees.create(req.body)
    .then(subscriber => console.log(subscriber))
    .catch(error => console.log(error))

   
//   const kitty = new employees(req.body);
//     // { name: req.body.name,
//     // age: req.body.age,
//     // location: req.body.location });
// kitty.save().then((ruslt) => console.log(ruslt));
res.send({ok :'ok'})
});

app.get("/fetchdata",function(req, res) {
  console.log("bbbb",req.body);

  employees.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
  
});

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});