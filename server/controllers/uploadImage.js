const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const fs = require('fs')

const multer = require('multer')

// rename file for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const extension = file.originalname.split('.')[1]

    cb(
      null,
      file.originalname.split('.')[0] + '-' + uniqueSuffix + '.' + extension
    )
  },
})

// use storage that defined above into multer function (more info in npm website)
const upload = multer({ storage }).single('avatar')
// const upload = multer({ dest: 'uploads/' }).single('avatar')

////////////////////////////////////////////////////////////////////
const uploadImage = (req, res, next) => {
  upload(req, res, (err) => {
    const maxSize = 1024 * 1024
    console.log('req.file', req.file)

    if (!req.file) {
      return res.status(404).json('Must provide file')
    } else if (!req.file.mimetype.startsWith('image')) {
      return res.status(404).json('Image Type is not supported')
    } else if (req.file.size > maxSize) {
      return res
        .status(404)
        .json('Max Size Exceeded. Cannot upload file over 1MB')
    }

    console.log(req.file)
    res.status(StatusCodes.OK).json(req.file)
  })
}

module.exports = uploadImage
