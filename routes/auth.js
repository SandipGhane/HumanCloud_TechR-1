const express = require('express');
const router = express.Router();

router.post('/signup',async (req,res)=>{
    try{
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(0,e.message,e);
    }
});

router.get('/',async (req,res)=>{
    res.status(200).send('index route');
})
module.exports = router;