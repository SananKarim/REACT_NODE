const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../model/User");

dotenv.config();

const connectToDatabaseUpdated = async () => {
  await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const getById = async (Id) => {
  try {
    await connectToDatabaseUpdated();
    const result = await User.findById(Id);
    console.log(result);
    await mongoose.connection.close();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const write = async (data) => {
  try {
    await connectToDatabaseUpdated();
    const result = await User.create(data);
    console.log(result);
    await mongoose.connection.close();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const update = async (id, updateData) => {
  try {
    await connectToDatabaseUpdated();
    const result = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    console.log(result);
    await mongoose.connection.close();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const list = async () => {
  try {
    await connectToDatabaseUpdated();
    const results = await User.find();
    console.log(results);
    await mongoose.connection.close();
    return results;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getByEmail = async (email) => {
  try {
    await connectToDatabaseUpdated();
    const result = await User.findOne({ email });
    console.log(result);
    await mongoose.connection.close();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getById,
  write,
  update,
  list,
  getByEmail,
};
