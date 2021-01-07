const User = require('../models/db/userData');
const { signJWT } = require('../utils/index');
const { createNewUser } = require('../models/register');
const { TokenSigner } = require('jsontokens');

exports.login = async(params)=>{
    const {email ,password } = params;
    const user = await User.findOne({email:email});
    console.log('user Data',user);
    if(!user) return {message:'Login attempt failed'};
    const hasPasswordMatched = user.matchPassword(password,user.password);
    if(!hasPasswordMatched) return {message:'Login attempt failed'};
    const userToken = new TokenSigner('ES256K',process.env.privateKey).sign(process.env.payload)
    return{
      message: 'User logged in', userToken, profileID: user.profileID,
    };
}

exports.signup = async(params) =>{
    const {password,confirmPassword} = params;
    if(password != confirmPassword){
        return{message:'password and confirm password not match',status:0};
    }
    const response = await createNewUser(params);
    return response;
}