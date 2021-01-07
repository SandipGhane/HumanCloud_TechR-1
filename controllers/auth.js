const User = require('../models/db/userData');
const { signJWT } = require('../utils/index');
exports.login = async(params)=>{
    const {email ,password } = params;
    const user = await User.findOne({email:email});
    console.log('user Data',user);
    if(!user) return {message:'Login attempt failed'};
    const hasPasswordMatched = User.matchPassword(password,user.password);
    if(!hasPasswordMatched) return {message:'Login attempt failed'};
    const userToken = await signJWT({profileID:user.profileID },process.env.privateKey,30000,'RS256');
    console.log('user Token',userToken);
    return {
        message: 'User logged in', userToken, profileID: user.profileID,
    };
}