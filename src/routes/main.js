const express = require("express");
const routes = express.Router();

const Detail = require("../models/detail");

routes.get("/",async(req,res)=>{
  const details = await Detail.findOne({"_id":"6426dd87f2b092256e30901f"});  
  res.render("index",{
    details:details
  })
})
routes.get("/gallery",async(req,res)=>{
    const details = await Detail.findOne({"_id":"6426dd87f2b092256e30901f"});  
    res.render("gallery",{
      details:details
    })
   

module.exports = routes;