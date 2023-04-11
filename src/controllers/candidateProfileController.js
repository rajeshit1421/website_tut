const CandidateProfileModel = require("../models/candidateProfile.js");

class CandidateProfileController {
  static saveProfile = async (req, res) => {
    try {
      const { name, email, dob, st, gender, pjl } = req.body;
      const pimage = req.files["pimage"][0].filename;
      const rdoc = req.files["rdoc"][0].filename;

      if (name && email && pimage && rdoc) {
        const doc = new CandidateProfileModel({
          name: name,
          email: email,
          dob: dob,
          state: st,
          gender: gender,
          location: pjl,
          pimage: pimage,
          rdoc: rdoc,
        });
        const candidate = await doc.save();

        res.status(200).json({
          status: "success",
          message: "All Fields are updated",
          candidate: candidate,
        });
      } else {
        res.status(200).json({
          status: "failed",
          message: "All Fields are required",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = CandidateProfileController;
