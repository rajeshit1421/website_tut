const mongoose = require("mongoose");

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIOS = { dbName: "website_tut", useNewUrlParser: "true" };
    await mongoose.connect(DATABASE_URL, DB_OPTIOS);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
