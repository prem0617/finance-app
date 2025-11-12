const mongoose = require('mongoose');

const expenseCategoriesSchema = new mongoose.Schema({
  expenseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'expenses',
    required: [true, 'Expense ID is required']
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
    required: [true, 'Category ID is required']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('expense_categories', expenseCategoriesSchema);