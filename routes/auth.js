const express = require('express');
const router = express.Router();
const { login,signup } = require('../controllers/auth')

router.post('/login',async (req,res)=>{
    try{
        const response = await login(req.body);
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(0,e.message,e);
    }
})

router.post('/signup',async (req,res)=>{
    try{
        const response = await signup(req.body);
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(0,e.message,e);
    }
})

module.exports = router