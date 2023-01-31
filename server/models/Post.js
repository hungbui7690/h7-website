const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide title'],
    minlength: 10,
    maxlength: 100,
  },
  thumbnail: {
    type: String,
    require: [true, 'Please provide thumbnail'],
    default: '/uploads/default-thumbnail.jpg',
  },
  content: {
    type: String,
    require: [true, 'Please provide content'],
    minlength: 10,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
  },
})

module.exports = mongoose.model('Post', PostSchema)
