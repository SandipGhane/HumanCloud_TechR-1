const { getAccountBalance } = require('../models/wallet')
const { debitCard,transactionList } = require('./paymentService')
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