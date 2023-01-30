const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  username: {
    type: 'String',
    require: [true, 'Please provide username'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: 'String',
    require: [true, 'Please provide email'],
    validate: {
      type: validator.isEmail,
      message: 'Please provide valid email',
    },
  },
  password: {
    type: String,
    require: [true, 'Please provide password'],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
})

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model('User', UserSchema)