const express = require("express");
const routes = express.Router();

const Detail = require("../models/detail");
const Contact = require("../models/contact");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "6426dd87f2b092256e30901f" });
  res.render("index", {
    details: details,
  });
});
routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({ _id: "6426dd87f2b092256e30901f" });
  res.render("gallery", {
    details: details,
  });
});
routes.post("/process-contact-form", async (req, res) => {
  try {
    const data = Contact.create(req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});
module.exports = routes;

