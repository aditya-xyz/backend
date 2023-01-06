import Project from "../models/Project.js"

export const getProjects = async (req, res) => {
  try {
    const project = await Project.find().sort({ id: 1 }).limit(8)
    res.status(200).json(project)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
