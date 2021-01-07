const {v4: uuidv4} = require('uuid');
const Transaction = require('../models/db/transaction');
const User = require('../models/db/userData');
const { createTransport } = require('nodemailer')

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
        await sendEmail(reciverUserData.email,reciverUserData.phone,amount,senderUser.firstName,senderUser.lastName);
    }
    return {'message':'Fund transfer successful',data:transaction}
}

const sendEmail=async(email,phone,amount,firstName,lastName)=>{
    const from = 'HumanCloudr-1 <sandiprghane@gmail.com';
    const to = email;
    const subject = 'Transfer Funds';
    const body = `<body>
    <div style="font-family: sans-serif; margin-top: 50px">
        <p style="font-size: 35px;color: #02a0df; display: inline; 
        letter-spacing: 2px">Fund Transfer <span style="text-transform: uppercase; font-size: 30px"><b>From : ${phone}</b></br><b>Amount Created ${amount}</b></span></p>        
    </div>
    <div style="margin-top: 50px;font-family: sans-serif;">
        <h5>Regards,</h5>
        ${firstName} ${lastName}
    </div>
  </body>`;

  const transport = createTransport({
      service:'gmail',
      auth:{
          user:process.env.EMAIL,
          pass:process.env.PASSWORD,
      }
  });
  transport.sendMail({
      from:from,to:to,subject:subject,html:body
  },(error,info)=>{
      if(error){
          console.log('error',error);
      }else{
          console.log('Email send');
      }
  });
}