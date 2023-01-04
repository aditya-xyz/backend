import express from "express"
import { getProjects } from "../controllers/projects.js"

const router = express.Router()

router.get("/", getProjects)

export default router
