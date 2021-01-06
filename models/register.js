const UserSchema = require('./db/userData');
const { createHash } = require('../utils/index');


const saveUserDetails = async(params)=>{
    let user = new UserSchema(params);
    let id;
    const flag = await findUser(params.profileID);
    console.log('user',flag);
    if(flag.length == 0){
        await user.save();
        return { message :'User details saved',data:user};
    }
    flag.map((data)=>{
       user.phone = data.phone;
       id = data._id;
    })
    console.log('phone',id);
    console.log('updates data',user);
    user = await updateUser(id,user);
    console.log('user',user);
    return { message :'Update details',data:user};
}

const updateUser=async(id,user) => updateData(UserSchema,{_id},{firstName:user.firstName});
const updateData = (Model,query,updates) => Model.findOneAndUpdate(query,updates);
const findUser = async(profileID)=> findOne(UserSchema,{ profileID });
const findOne = (Model, query) => Model.find(query);

module.exports ={
    saveUserDetails
}