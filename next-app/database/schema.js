import mongoose from "mongoose";

const kittySchema = new mongoose.Schema({
  name: String,
});

const kitten =
  mongoose.models["kitten"] || mongoose.model("kitten", kittySchema);

export default kitten;
