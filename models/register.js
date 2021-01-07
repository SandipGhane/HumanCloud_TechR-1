const UserSchema = require('./db/userData');
const { createHash } = require('../utils/index');


const createNewUser =async (params) =>{
    const { email,password,phone} = params;
    let userFound = await findUserByEmail(email);
    if(userFound.length !=0 ){
        return {message:'User already registered'};
    }
    const user = new UserSchema();
    user.password = user.hashPassword(password);
    user.email = email;
    user.phone = phone;
    user.profileID =  createHash(user.hashPassword(Date.now()));
    const data = await user.save();
    return { message: 'User details saved', data: data };
}

const saveUserDetails = async(params)=>{
    let user = new UserSchema(params);
    let id;
    const flag = await findUser(params.profileID);
    // if(flag.length == 0){
    //     await user.save();
    //     return { message :'User details saved',data:user};
    // }
    flag.map((data)=>{
       user.phone = data.phone;
       id = data._id;
    })
    user = await updateUser(id,user);
    return { message :'Update details',data:user};
}

const deleteData = async(profileID)=>{
   const user = new UserSchema();
   user.findOneAndRemove({profileID:profileID},(err)=>{
       if(err){
           throw err;
       }else{
           return {message :'delete user data'};
       }
   })
}


const updateUser=async(id,user) => updateData(UserSchema,{_id:id},{firstName:user.firstName,lastName:user.lastName,email:user.email,city:user.city,country:user.country,pincode:user.pincode,state:user.state});
const updateData = (Model,query,updates) => Model.findOneAndUpdate(query,updates);
const findUser = async(profileID)=> findOne(UserSchema,{ profileID });
const findUserByEmail = async(email)=>findOne(UserSchema,{ email:email });
const findOne = (Model, query) => Model.find(query);

module.exports ={
    saveUserDetails,
    deleteData,
    findUser,
    createNewUser
}