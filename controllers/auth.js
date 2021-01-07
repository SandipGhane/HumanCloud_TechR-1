const User = require('../models/db/userData');
const { signJWT } = require('../utils/index');
const { createNewUser } = require('../models/register')

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

exports.signup = async(params) =>{
    const {password,confirmPassword} = params;
    if(password != confirmPassword){
        return{message:'password and confirm password not match',status:0};
    }
    const response = await createNewUser(params);
    return response;
}