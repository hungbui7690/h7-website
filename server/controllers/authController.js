const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const User = require('../models/User')
const { createTokenUser } = require('../utils/createTokenUser')
const { createJWT, attachCookiesToResponse } = require('../utils/jwt')

//////////////////////////////////////////////////
const register = async (req, res) => {
  // get input
  const { username, email, password: passwd } = req.body

  // check empty
  if (!username || !email || !passwd)
    throw new CustomError.BadRequestError('Please provide all fields')

  // check existance in db
  const isEmailExists = await User.findOne({ email })
  if (isEmailExists)
    throw new CustomError.BadRequestError('Email already exists')

  // get role based on first account in db or not
  const isFirstAccount = (await User.countDocuments({})) === 0
  const role = isFirstAccount ? 'admin' : 'user'

  // create user
  const user = await User.create({ username, email, password: passwd, role })
  const tokenUser = createTokenUser(user)

  // attach token to cookie
  attachCookiesToResponse({ res, user: tokenUser })

  // remove password from response
  const { password, ...others } = user._doc

  // send back response
  res.status(StatusCodes.CREATED).json(others)
}

//////////////////////////////////////////////////
const login = async (req, res) => {
  // get input
  const { username, password } = req.body

  // check empty
  if (!username || !password)
    throw new CustomError.BadRequestError('Please provide email & password')

  // find user by username
  const user = await User.findOne({ username })

  // return error if user not found
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }

  // return error if password is not correct
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }

  // attach token to cookie
  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({ res, user: tokenUser })

  // send back response
  res.status(StatusCodes.OK).json({ user: tokenUser })
}

//////////////////////////////////////////////////
const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(StatusCodes.OK).json('Logout')
}

module.exports = {
  register,
  login,
  logout,
}
