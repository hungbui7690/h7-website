const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { checkPermission } = require('../utils')

/////////////////////////////////////////////////////////
const showCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userID }).select('-password')

  if (!user)
    throw new CustomError.BadRequestError(`No user with id ${req.user.userID}`)
  checkPermission(req.user, user)

  res.status(StatusCodes.OK).json(user)
}

/////////////////////////////////////////////////////////
const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body

  const user = await User.findOne({ _id: req.user.userID })

  if (!oldPassword || !newPassword)
    throw new CustomError.BadRequestError('Please fill in all the fields')

  const isPasswordCorrect = await user.comparePassword(oldPassword)
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }

  user.password = newPassword
  user.save()

  const { password, ...others } = user._doc

  res.status(StatusCodes.OK).json(others)
}

module.exports = {
  showCurrentUser,
  updateUserPassword,
}
