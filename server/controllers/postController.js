const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { checkPermission } = require('../utils')
const Post = require('../models/Post')

/////////////////////////////////////////////////////////
const createPost = async (req, res) => {
  // get input
  const { type, title, image, content, tags } = req.body

  // check empty fields
  if (!title || !image || !content || !tags || !type)
    throw new CustomError.BadRequestError(
      'Please provide type, title, thumbnail content & tags of the Post'
    )

  // create post
  const post = await Post.create({
    title,
    image,
    content,
    tags,
    createdBy: req.user.userID,
  })

  // handle error when creating post
  if (!post) throw new CustomError('Something is wrong. Post cannot create.')

  // return response
  res.status(StatusCodes.OK).json({ post })
}

/////////////////////////////////////////////////////////
const getAllPosts = async (req, res) => {
  const posts = await Post.find({ status: 'active' })
  res.status(StatusCodes.OK).json({ count: posts.length, posts })
}

/////////////////////////////////////////////////////////
const getSinglePost = async (req, res) => {
  // get post id from url
  const { id: postID } = req.params

  // get post by id
  const post = await Post.findOne({ _id: postID })

  // handle error if post not found
  if (!post) throw new CustomError(`No post with id ${postID}`)

  // return response
  res.status(StatusCodes.OK).json({ post })
}

/////////////////////////////////////////////////////////
const updatePost = async (req, res) => {
  const { title, image, content, tags } = req.body

  // get post and handle error
  const { id: postID } = req.params
  const post = await Post.findOne({ _id: postID })
  if (!post) throw new CustomError(`No post with id ${postID}`)

  // check empty
  if (!title || !image || !content || !tags)
    throw new CustomError.BadRequestError(
      'Please provide title, image ,content & tags of the post'
    )

  // update post with new title, image, content
  post.title = title
  post.image = image
  post.content = content
  post.tags = tags
  post.save()

  res.status(StatusCodes.OK).json(post)
}

/////////////////////////////////////////////////////////
const deletePost = async (req, res) => {
  const { id: postID } = req.params

  const post = await Post.findOne({ _id: postID })

  if (!post) throw new CustomError(`No post with id ${postID}`)

  post.status = 'inactive'
  post.save()

  res.status(StatusCodes.OK).json({ status: 'completed' })
}

/////////////////////////////////////////////////////////

module.exports = {
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  createPost,
}
