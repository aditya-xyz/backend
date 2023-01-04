import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  mediumUrl: {
    type: String,
    required: true,
  },
  gitHubUrl: {
    type: String,
    required: true,
  },
})

const Project = mongoose.model("Project", projectSchema)

export default Project
