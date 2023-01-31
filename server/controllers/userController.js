const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

/////////////////////////////////////////////////////////
const getAllUsers = async (req, res) => {
  res.status(StatusCodes.OK).json('Get All Users')
}

/////////////////////////////////////////////////////////
const getSingleUser = async (req, res) => {
  res.status(StatusCodes.OK).json(' Get Single User')
}

/////////////////////////////////////////////////////////
const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json('Show Current User')
}
const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json('Update User')
}

/////////////////////////////////////////////////////////
const updateUserPassword = async (req, res) => {
  res.status(StatusCodes.OK).json('Update User Password')
}

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
}
