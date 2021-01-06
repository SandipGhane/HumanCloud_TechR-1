const UserSchema = require('./db/userData');
const { createHash } = require('../utils/index');




const saveUserDetails = async(params)=>{
    let user = new UserSchema(params);
    let id;
    const flag = await findUser(params.profileID);
    if(flag.length == 0){
        await user.save();
        return { message :'User details saved',data:user};
    }
    flag.map((data)=>{
       user.phone = data.phone;
       id = data._id;
    })
    user = await updateUser(id,user);
    console.log('user',user);
    return { message :'Update details',data:user};
}

const deleteData = async(profileID)=>{
   const user = new UserSchema;
   user.findOneAndRemove({'profileID':profileID},(err)=>{
       if(err){
           throw err;
       }else{
           return {message :'delete user data'};
       }
   })
}

const deleteUser = (Model,query) => Model.deleteOne({profileID:query});
const updateUser=async(id,user) => updateData(UserSchema,{_id:id},{firstName:user.firstName});
const updateData = (Model,query,updates) => Model.findOneAndUpdate(query,updates);
const findUser = async(profileID)=> findOne(UserSchema,{ profileID });
const findOne = (Model, query) => Model.find(query);

module.exports ={
    saveUserDetails,
    deleteData,
    findUser
}