const { getAccountBalance } = require('../models/wallet')
const { debitCard,transactionList } = require('./paymentService')
const { transfer } = require('./transferService')

exports.getBalance =async(params)=>{
    const balance = await getAccountBalance(params);
    return balance;
}
exports.addFunds = async(params)=>{
    try{  
        const paymentResponse = await debitCard(params);
       return paymentResponse;
    }catch(err){
        next(err)
    }
}

exports.getTransactions = async(params)=>{
    const list = await transactionList(params);
    return list;
}

exports.transferFund = async(params)=>{
    try{  
        const transferAmt = await transfer(params);
       return transferAmt;
    }catch(err){
        next(err)
    }
}