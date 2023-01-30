const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const register = async (req, res) => {
  res.status(StatusCodes.CREATED).json('Register')
}

const login = async (req, res) => {
  res.status(StatusCodes.OK).json('Login')
}

const logout = async (req, res) => {
  res.status(StatusCodes.OK).json('Logout')
}

module.exports = {
  register,
  login,
  logout,
}
