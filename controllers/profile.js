const { saveUserDetails } = require('../models/register')


const newUserRegistration = async(params)=>{
    const {firstName, lastName, phone, email,city, state, country, pincode,profileID} = params;
    const address = {
        "city":city,
        "state":state,
        "country":country,
        "pincode":pincode
    }
    const response = await saveUserDetails({
        firstName, lastName, phone, email, address,profileID
    })
    console.log('response here',response);
}
module.exports ={
    newUserRegistration
}