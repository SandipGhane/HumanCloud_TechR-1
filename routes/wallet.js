const express = require('express');
const router = express.Router();
const { getBalance } = require('../controllers/wallet');

router.get('/balance',async(req,res)=>{
    try{
        const { profileID } = req.query;
        const response = await getBalance(profileID);
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(0,e.message,e);
   }
})

module.exports = router