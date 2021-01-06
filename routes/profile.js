const express = require('express');
const router = express.Router();
const { newUserRegistration,deleteUserData } = require('../controllers/profile');
router.post('/register',async (req,res)=>{
    try{
        const response =  await newUserRegistration(req.body);
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(0,e.message,e);
    }
});

router.delete('/deleteUser',async (req,res)=>{
    const { profileID } = req.query;
   try {
       const res = await deleteUserData(profileID);
   }catch(e){
        res.status(500).send(0,e.message,e);
   }
})
router.get('/',async (req,res)=>{
    res.status(200).send('index route');
})

module.exports = router
