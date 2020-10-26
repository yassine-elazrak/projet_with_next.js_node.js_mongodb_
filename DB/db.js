const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
// const employees = require("../model/user");
const router = express.Router();
const port = 4000;

module.exports = function (){
var uri = 'mongodb://localhost:27017/test';

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
}