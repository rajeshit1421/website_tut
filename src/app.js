
const dotenv = require("dotenv");
dotenv.config(); 
const express = require("express");
const logger = require('./logger');
const routes = require('./routes/main');
const hbs = require("hbs");

const app = express();
const port = process.env.PORT||3000;


app.use('/',routes);

//Template engine
app.set('view engine','hbs');
app.set("views","views");



app.listen(port,()=>{
    console.log(`Server estblished ${port}`);
})
