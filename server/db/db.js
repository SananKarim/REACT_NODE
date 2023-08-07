const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB"); // This message was missing
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
const closeDatabaseConnection = async () => {
  if (dbConnection) {
    await dbConnection.disconnect(); // Close the database connection
    console.log("Disconnected from MongoDB");
  }
};

module.exports = {
  connectToDatabase,
  closeDatabaseConnection,
};
