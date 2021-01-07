const express = require('express');
const router = express.Router();
const { getBalance, addFunds,getTransactions,transferFund } = require('../controllers/wallet');

router.get('/balance',async(req,res)=>{
    try{
        const { profileID } = req.query;
        const response = await getBalance(profileID);
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(0,e.message,e);
   }
})

router.post('/addfund',async(req,res)=>{
    try{
        const response = await addFunds(req.body);
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(0,e.message,e);
    }
})

router.get('/transactionList',async(req,res)=>{
    try{
        const { phone } = req.query;
        const response = await getTransactions(phone);
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(0,e.message,e);
    }
})

router.post('/transfer',async(req,res)=>{
    try{
        const response = await transferFund(req.body);
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(0,e.message,e);
    }
})
module.exports = router