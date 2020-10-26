const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
 password: {
    type: String,
    required: true,
  }
}, { collection: 'user' });

module.exports = mongoose.model('user', itemSchema);