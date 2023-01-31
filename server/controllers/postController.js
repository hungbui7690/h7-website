const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { checkPermission } = require('../utils')

/////////////////////////////////////////////////////////
const getAllPosts = async (req, res) => {
  res.status(StatusCodes.OK).json('Get All Posts')
}

/////////////////////////////////////////////////////////
const getSinglePost = async (req, res) => {
  res.status(StatusCodes.OK).json('Get Single Post')
}

/////////////////////////////////////////////////////////
const updatePost = async (req, res) => {
  res.status(StatusCodes.OK).json('Update Post')
}

/////////////////////////////////////////////////////////
const deletePost = async (req, res) => {
  res.status(StatusCodes.OK).json('Delete Post')
}

/////////////////////////////////////////////////////////

module.exports = {
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
}
