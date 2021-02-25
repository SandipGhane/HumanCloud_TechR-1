const mongoose = require('mongoose');
const { model } = require('mongoose');
const { Schema } = mongoose;
const { hashSync, genSaltSync, compareSync } = require('bcrypt-nodejs');

const UserDataSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    address: {
        state: {
            type: String,
        },
        city: {
            type: String
        },
        country: {
            type: String
        },
        pincode: {
            type: Number
        }
    },
    balance: {
        type: Number,
        min: 0,
        default: 0
    },
    profileID: String
}, {
    collation: 'UserData'
});

UserDataSchema.methods.hashPassword = (password) => hashSync(
    password, genSaltSync(10),
)
UserDataSchema.methods.matchPassword = (password, hash) => {
    try {
        return compareSync(password, hash);
    } catch (error) {
        return false;
    }
}
const UserData = model('UserData', UserDataSchema);


module.exports = UserData;