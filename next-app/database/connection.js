// create the mongodb connection
import mongoose from "mongoose";

const main = async () => {
  // mongoose.connect(
  //   "mongodb+srv://admin:admin123@nextjstesting.cya04ft.mongodb.net/?retryWrites=true&w=majority"
  // );

  mongoose.connect("mongodb://localhost:27017/NextJsTesting");

  console.log("Database Connected");
};

export default main;
