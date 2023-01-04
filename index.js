import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import projectRoutes from "./routes/projects.js"
import experienceRoutes from "./routes/experiences.js"

//configs
dotenv.config()
mongoose.set("strictQuery", false)
const app = express()
app.use(express.json())

//routes
app.use("/project", projectRoutes)
app.use("/experience", experienceRoutes)

//mongoose
const PORT = process.env.PORT || 6001

// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
// })
// const db = mongoose.connection
// db.on("error", (error) => console.error(error))
// db.once("open", () => console.log("Connected to database"))

// app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
  })
  .catch((error) => console.log(`${error} did not connect`))
