const { saveUserDetails } = require('../models/register')


const newUserRegistration = async(params)=>{
    const {firstName, lastName, phone,password, email,city, state, country, pincode} = params;
    const address = {
        "city":city,
        "state":state,
        "country":country,
        "pincode":pincode
    }
    const response = await saveUserDetails({
        firstName, lastName, phone, email, address,password
    })
    console.log('response here',response);
}
module.exports ={
    newUserRegistration
}