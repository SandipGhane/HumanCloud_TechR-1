const mongoose = require('mongoose');
const User = require('../db/userData');

const operations = ['deposit', 'withdrawal', 'transfer'];

const transactionSchema = new mongoose.Schema({
    operation: {
      type: String,
      required: true,
      enum: operations,
    },
    accountNumber: {
      type: 'Number',
      ref: 'Customer',
      required: true,
    },
    destinationAccountNumber: {
      type: 'Number',
      ref: 'Customer'
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
  