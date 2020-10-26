const mongoose = require("mongoose");
const bcrypt = require('bcrypt')                                                                                                                                                 


const Schema = mongoose.Schema;

let user = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    location: {
      type: String
    },
    password:{
      type: String
    }
  },
  { collection: "users" }
);
user.pre('save', function(next) {                                                                                                                                        
    if(this.password) {                                                                                                                                                        
        var salt = bcrypt.genSaltSync(10)                                                                                                                                     
        this.password  = bcrypt.hashSync(this.password, salt)                                                                                                                
    }                                                                                                                                                                          
    next()                                                                                                                                                                     
}) 

module.exports = mongoose.model("users", user);

// var mongoose = require('mongoose'),                                                                                                                                            
//     Schema = mongoose.Schema                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                               
// var bcrypt = require('bcrypt')                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                              
// var UserSchema = new Schema( {                                                                                                                                                 
//     email: String,                                                                                                                                                             
//     password: String                                                                                                                                                           
// } )                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                               
// // pre                                                                                                                                                                         
// UserSchema.pre('save', function(next) {                                                                                                                                        
//     if(this.password) {                                                                                                                                                        
//         var salt = bcrypt.genSaltSync(10)                                                                                                                                     
//         this.password  = bcrypt.hashSync(this.password, salt)                                                                                                                
//     }                                                                                                                                                                          
//     next()                                                                                                                                                                     
// })                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                               
// mongoose.model('User', UserSchema);