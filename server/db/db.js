import mongoose from "mongoose";

const connectToDatabase = async (dbURI) => {
  try {
    let connection = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    return connection;
  } catch (error) {
    return Promise.(error);
  }
};

const connectToDatabaseUpdated = async (dbURI) => {
  return await mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

const get = async (id) => {
  try {
    //await connectToDatabaseUpdated();

    await connectToDatabase();
  } catch (error) {
    console.log("I am here");
  }

  //get from db
  //return results
};

const write = () => {};

const list = () => {};

const update = () => {};

export default {
  get,
  write,
  list,
  update,
};
