import Project from "../models/Project.js"

export const getProjects = async (req, res) => {
  try {
    const project = await Project.find()
    res.status(200).json(project)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
