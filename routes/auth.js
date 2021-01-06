const express = require('express');
const router = express.Router();
const { newUserRegistration } = require('../controllers/auth');
router.post('/register',async (req,res)=>{
    try{
        const response =  await newUserRegistration(req.body);
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(0,e.message,e);
    }
});

router.get('/',async (req,res)=>{
    res.status(200).send('index route');
})

module.exports = router
