"use strict"
const express = require("express");
const dotenv = require('dotenv');
const config = require("./config/config");
const cors = require('cors');
const path = require('path');
const mongoose = require("mongoose");

const profile = require('./routes/profile');
const ewallet = require('./routes/wallet');
const auth = require('./routes/auth');
const app = express();

dotenv.config();
const addMiddleware = async ()=>{
  app.use(express.json());
  app.use(express.urlencoded({ limit: '50mb', extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(cors());
}
mongoose.set("useCreateIndex", true);
mongoose
  .connect(
    'mongodb+srv://root:root@cluster0.jgrtp.mongodb.net/humanCloud?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology:true
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

const addRoutes =()=>{
  app.use('/profile',profile);
  app.use('/ewallet',ewallet);
  app.use('/auth',auth);
}


const start=async ()=>{
  try{
    await addMiddleware()
    addRoutes();
  }catch(error){
    console.error(error.message);
  }
}


start();

const port = Number(process.env.PORT || config.server.port)

const server = app.listen(port, () =>
  console.log(`Listening on ${server.address().port}`)
)

module.exports = app 
