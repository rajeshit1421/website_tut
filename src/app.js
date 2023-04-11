const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const logger = require("./logger");
const routes = require("./routes/main");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const Detail = require("./models/detail");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/connectdb.js");
const candidateRoutes = require("./routes/candidateRoutes");
const upload = require("./middleware/upload-middleware.js");
//Cors Policy
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use("/", routes);
//Template engine
app.set("view engine", "hbs");
app.set("views", "views");

hbs.registerPartials("views/partial");
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// app.use(
//   upload.fields([
//     { name: "pimage", maxCount: 1 },
//     { name: "rdoc", maxCount: 1 },
//   ])
// );
app.use(express.json());
app.use("/api", candidateRoutes);
//db connections
connectDB(DATABASE_URL);
app.listen(port, () => {
  console.log(`Server estblished ${port}`);
});
