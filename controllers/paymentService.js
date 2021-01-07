const {v4: uuidv4} = require('uuid');
const crypto = require('crypto');
const moment = require('moment-timezone');
const GatewayTransaction = require('../models/gatewayTransaction.model');
const { error } = require('console');
const Transaction = require('../models/db/transaction');
const User = require('../models/db/userData')


const simulateGatewayCall=async(card, amount) =>{
    
    let status = 'success';
    if(card === '4242424242424242'){
        status = 'failure';
    }

    const hex = crypto.randomBytes(Math.ceil(6/2))
    .toString('hex')
    .slice(0,6);
    const auth_code = parseInt(hex, 16);
    const result = {
        'transactionId': uuidv4(),
        'status': status,
        'paymentDate': new Date(),
        'amount': amount,
        'authorizationCode': auth_code,
    }
  return result;
}

exports.debitCard = async (params)=>{
    let updatedAmount;
    const { phone, card, amount,profileID } = params;
    const gatewayResponse = await simulateGatewayCall(card, amount);
    const gatewayTransaction = new GatewayTransaction(gatewayResponse);
    const savedGatewayTransaction = await gatewayTransaction.save();
    if(savedGatewayTransaction.status === 'failure'){
        throw error;
    }
    const transaction = new Transaction();
    transaction.amount = amount;
    transaction.operation = 'AddFunds';
    transaction.phone = phone;
    transaction.reference = "payment_gateway_transaction:"+savedGatewayTransaction.transactionId;
    const savedTransaction = await transaction.save();
    const savedCustomer = await User.findOne({profileID:profileID});
    updatedAmount = amount + savedCustomer.balance;
    console.log('updated amount',savedCustomer.profileID);
    if(savedCustomer){
        await User.findOneAndUpdate({_id:savedCustomer._id},{balance:updatedAmount});
    }
    savedTransaction.accountBalance = updatedAmount;
    return savedTransaction;
}