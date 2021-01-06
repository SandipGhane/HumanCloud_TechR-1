const mongoose = require('mongoose');
const User = require('../db/userData');

const operations = ['AddFunds', 'withdrawal', 'transfer'];

const transactionSchema = new mongoose.Schema({
    operation: {
      type: String,
      required: true,
      enum: operations,
    },
    phone: {
      type: 'Number',
      ref: 'User',
      required: true,
    },
    destinationAccountNumber: {
      type: 'Number',
    },
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
  }, {
    timestamps: true,
  });

  const Transaction = mongoose.model('Transaction', transactionSchema);
  module.exports = Transaction;
  