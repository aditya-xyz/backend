import mongoose from "mongoose"

const experienceSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  styleString: {
    type: String,
    required: true,
  },
})

const Experience = mongoose.model("Experience", experienceSchema)

export default Experience
