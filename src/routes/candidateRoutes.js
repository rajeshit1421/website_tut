const express = require("express");
const routes = express.Router();
const CandidateProfileController = require("../controllers/candidateProfileController.js");
const upload = require("../middleware/upload-middleware.js");
routes.use(
  "/resume",
  upload.fields([
    { name: "pimage", maxCount: 1 },
    { name: "rdoc", maxCount: 1 },
  ])
);
//Public Routes
routes.post("/resume", CandidateProfileController.saveProfile);

module.exports = routes;
