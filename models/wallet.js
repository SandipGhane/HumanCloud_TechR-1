const { findUser } = require('./register');

const getAccountBalance = async(profilID) =>{
    const flag = await findUser(profilID);
    let accountBalance;
    flag.map((data)=>{
        accountBalance = data.balance;
    })
    return({message:'Account Balance',data:accountBalance});
}

module.exports={
    getAccountBalance
}