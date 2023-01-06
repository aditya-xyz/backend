import Experience from "../models/Experience.js"

export const getExperiences = async (req, res) => {
  try {
    const experience = await Experience.find().sort({ id: 1 }).limit(9)
    res.status(200).json(experience)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
