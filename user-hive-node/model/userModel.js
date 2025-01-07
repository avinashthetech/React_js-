const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  useremail: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
  },
  userpassword: {
    type: String,
    required: [true, 'Password is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    minLength: 10,
    maxLength: 10,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: [true, 'Gender is required'],
  },
  dob: {
    type: Date,
    required: [true, 'Date of birth is required'],
  },
  agreement: {
    type: Boolean,
    required: [true, 'You must accept the agreement'],
  },
  usertype: {
    type: String,
    enum: ['client', 'admin', 'vendor', 'driver'],
    default: 'client', // Default user type is client
  },
  profile: {
    type: String,
    default: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png', // Default profile image
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
