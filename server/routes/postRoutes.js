const express = require('express')
const router = express.Router()

const {
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require('../controllers/postController')

router.route('/').get(getAllPosts)
router.route('/:id').get(getSinglePost)
router.route('/:id').patch(updatePost)
router.route('/delete/:id').patch(deletePost)

module.exports = router
