const { write } = require("../db/db");

module.exports.signup_post = async (req, res) => {
  try {
    // Retrieve user input from request body
    const { username, email, password } = req.body;

    // Create user data object
    const userData = {
      username,
      email,
      password,
    };

    // Write the new user to the database
    const result = await write(userData);
    
    // Return a success response
    res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    // Handle any errors that occur during the signup process
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};