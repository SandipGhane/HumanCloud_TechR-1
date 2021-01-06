const UserSchema = require('./db/userData');
const { createHash } = require('../utils/index');

const saveUserDetails = async(params)=>{
    const user = new UserSchema(params);
    user.profileID = createHash(user.hashPassword(Date.now()));
    user.password = user.hashPassword(params.password);
    await user.save();
    return { message :'User details saved',data:user};
}

module.exports ={
    saveUserDetails
}