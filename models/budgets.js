const mongoose = require('mongoose');

const budgetsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'User ID is required']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [0, 'Amount must be a positive number']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('budgets', budgetsSchema);