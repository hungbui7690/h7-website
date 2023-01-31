const express = require('express')
const router = express.Router()

const {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require('../controllers/postController')
const { authenticateUser } = require('../middleware/authentication')

router.route('/').post(authenticateUser, createPost)
router.route('/').get(getAllPosts)
router.route('/:id').get(getSinglePost)
router.route('/:id').patch(authenticateUser, updatePost)
router.route('/delete/:id').patch(authenticateUser, deletePost)

module.exports = router
