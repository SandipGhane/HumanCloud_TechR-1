const { getAccountBalance } = require('../models/wallet')

const getBalance =async(params)=>{
    const balance = await getAccountBalance(params);
    return balance;
}

module.exports = {
    getBalance
}