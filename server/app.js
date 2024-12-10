import 'dotenv/config'
import express from "express";
import cors from 'cors'
import { connectDB } from './mongodb.js';
import catRouter from './routes/categoryRoutes.js';
const PORT = process.env.PORT
const app = express()


app.use(cors())
app.use(express.json())
app.use('/api/v1/categories',catRouter)

// mongo db connection
connectDB()
// server connection
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`)
})
