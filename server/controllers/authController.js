const { write } = require("../db/db");
const { validateSignup } = require("../rules/rules");

module.exports.signup_post = async (req, res) => {
  try {
    // Retrieve user input from request body
    const { error, value } = validateSignup(req.body);
    if (error) {
      // Return validation error response
      return res.status(400).json({ error: error.details });
    }

    // Create user data object
    const userData = value;

    // Write the new user to the database
    const result = await write(userData);

    // Return a success response
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    // Handle any errors that occur during the signup process
    console.error("Error during signup:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};
