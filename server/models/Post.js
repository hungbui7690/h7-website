const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide title'],
      minlength: 5,
      maxlength: 100,
    },
    image: {
      type: String,
      require: [true, 'Please provide thumbnail image'],
      default: '/uploads/default-thumbnail.jpg',
    },
    content: {
      type: String,
      require: [true, 'Please provide content'],
      minlength: 5,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    tags: {
      type: [String],
      default: ['web'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', PostSchema)
