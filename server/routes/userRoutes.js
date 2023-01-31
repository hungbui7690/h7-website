const express = require('express')
const router = express.Router()

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/userController')

const { authenticateUser } = require('../middleware/authentication')

router.route('/showCurrentUser').get(authenticateUser, showCurrentUser)
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword)

module.exports = router
