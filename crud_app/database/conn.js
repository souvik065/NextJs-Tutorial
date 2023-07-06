const MONGO_URI =
  "mongodb+srv://admin:nextjscrud@nextjscrud.8risius.mongodb.net/?retryWrites=true&w=majority";
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log("Connected to MongoDB");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
