const {v4: uuidv4} = require('uuid');
const Transaction = require('../models/db/transaction');
const User = require('../models/db/userData')

exports.transfer = async(params)=>{
    const { phone ,amount,destignationPhone } = params;
    const transaction = new Transaction();
    transaction.amount = amount;
    transaction.operation = 'transfer';
    transaction.phone = phone;
    transaction.destignationPhone = destignationPhone;
    transaction.reference = 'transfer_to_account:' + destignationPhone;
    // const savedTransaction = await transaction.save();
    const senderUser = await User.findOne({phone:phone});
    if(senderUser.balance < amount){
        return {message:'Insufficient funds',status:0};
    }
    const reciverUser = new Transaction();
    reciverUser.amount = amount;
    reciverUser.operation = 'transfer';
    reciverUser.phone = destignationPhone;
    reciverUser.destignationPhone = phone;
    reciverUser.reference = 'transfer_From_account:' + phone;
    // const savedReciverTransaction = await reciverUser.save();
    const reciverUserData = await User.findOne({phone:destignationPhone});
    if(reciverUserData == null){
        return {message:'Reciver user not registered',status: 0};
    }
    updatedAmount = amount + reciverUserData.balance;
    if(reciverUserData){
        await User.findOneAndUpdate({_id:senderUser._id},{balance:senderUser.balance-amount});
        await User.findOneAndUpdate({_id:reciverUserData._id},{balance:updatedAmount});
        return {'message':'Fund transfer successful',data:transaction}
    }
}