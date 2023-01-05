import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import projectRoutes from "./routes/projects.js"
import experienceRoutes from "./routes/experiences.js"

//configs
dotenv.config()
mongoose.set("strictQuery", false)
const app = express()
app.use(express.json())
app.use(cors())

//routes
app.use("/project", projectRoutes)
app.use("/experience", experienceRoutes)

//mongoose
const PORT = process.env.PORT || 6001

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
  })
  .catch((error) => console.log(`${error} did not connect`))
