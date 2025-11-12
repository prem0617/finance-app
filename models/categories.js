const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Category name is required'],
    trim: true,
    minLength: [3, 'Category name must be at least 3 characters long'],
    maxLength: [50, 'Category name must be at most 50 characters long']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('categories', categoriesSchema);