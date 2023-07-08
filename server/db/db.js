import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDatabaseUpdated = async () => {
  return await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

const getByID = async (id) => {
  try {
    await connectToDatabaseUpdated();
    const result = await YourModel.findById(id);
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
    const result = await YourModel.create(data);
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
    const result = await YourModel.findByIdAndUpdate(id, updateData, {
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
    const results = await YourModel.find();
    console.log(results);
    await mongoose.connection.close();
    return results;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getByID, write, update, list };

export default {
  getByID,
  write,
  list,
  update,
};
