const { getAccountBalance } = require('../models/wallet')
const { debitCard } = require('./paymentService')
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