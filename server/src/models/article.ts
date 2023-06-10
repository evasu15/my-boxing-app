import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  access: {
    type: String,
    enum: ["Beginners", "Intermediate", "Advanced"],
    required: true,
  },
});

export default mongoose.model("Article", articleSchema)