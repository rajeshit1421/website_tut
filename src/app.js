
const dotenv = require("dotenv");
dotenv.config(); 
const express = require("express");
const logger = require('./logger');
const routes = require('./routes/main');
const hbs = require("hbs");

const Detail = require("./models/detail")
const app = express();
const mongoose =require("mongoose");
const port = process.env.PORT||3000;

app.use('/static',express.static("public"));
app.use('/',routes);

//Template engine
app.set('view engine','hbs');
app.set("views","views");

hbs.registerPartials("views/partial")

//db connections
mongoose.connect("mongodb://127.0.0.1:27017/website_tut", {
  useNewUrlParser: "true",
})
const db = mongoose.connection;
db.on("error", err => {
  console.log("err", err)
})
db.on("connected", (err, res) => {
//   Detail.create({
//     brandName:"R V Technologogy",
//     brandIconurl:"",
//     links:[
//         {
//         label:"Home",
//         url:"/"
//     }, {
//       label:"Services",
//       url:"/services"
//   },{
//     label:"Gallery",
//     url:"/gallery"
// },{
//   label:"About",
//   url:"/about"
// },{
//   label:"Contact Us",
//   url:"/contact-us"
// }
// ],
//   })
})
app.listen(port,()=>{
    console.log(`Server estblished ${port}`);
})
