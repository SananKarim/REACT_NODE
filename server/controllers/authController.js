const { write, getByEmail } = require("../db/crud");

module.exports.signup_post = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;
    const userData = { username, email, password };

    // Use 'await' here to properly handle the promise returned by getByEmail
    const checking = await getByEmail(userData.email);

    if (checking != null) {
      return res.status(409).json({errortype: "DB errror", error: "User already exists." });
    } else {
      const result = await write(userData);
      console.log("new ID: " + result._id + " is created");
      res
        .status(201)
        .json({ message: "User created successfully.", id: result._id });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};
