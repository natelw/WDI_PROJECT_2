const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');  password encryption


const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
