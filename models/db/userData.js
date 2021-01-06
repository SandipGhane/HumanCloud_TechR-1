const mongoose = require('mongoose');
const { model } = require('mongoose');
const { Schema } = mongoose;
const { hashSync, genSaltSync, compareSync } = require('bcrypt-nodejs');

const UserDataSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        state:{
            type:String,
        },
        city:{
            type:String
        },
        country:{
            type:String
        },
        pincode:{
            type:Number
        }
    },
    password:{
        type:String,
        required:true
    },
    profileID:String
},{
    collation:'UserData'
});

UserDataSchema.methods.hashPassword = (password) => hashSync(
    password, genSaltSync(10),
)
UserDataSchema.methods.matchPassword=(password,hash)=>{
    try{
        return compareSync(password,hash);
    }catch(error){
        return false;
    }
}
const UserData = model('UserData',UserDataSchema);


module.exports = UserData;