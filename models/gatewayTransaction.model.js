const mongoose = require('mongoose');
const crypto = require('crypto');

const gatewayTransactionSchema = new mongoose.Schema({
    transactionId: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    paymentDate: {
      type: Date,
      required: true
    },
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
    authorizationCode: {
      type: Number,
      required: true,
    },
  }, {
    timestamps: true,
  });

  module.exports = mongoose.model('GatewayTransaction', gatewayTransactionSchema);