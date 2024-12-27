import 'dotenv/config'
import express from "express";
import cors from 'cors'
import { connectDB } from './mongodb.js';
import catRouter from './routes/categoryRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
const PORT = process.env.PORT
const app = express()

const corsOptions = {
    origin: [process.env.FRONTEND_URL,],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'], //access-control-allow-credentials:true
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
app.use(express.json())
app.use(cors())
app.use('/api/v1/categories',catRouter)
app.use(errorHandler)
// mongo db connection
connectDB()
// server connection 
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`)
// })
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT} in ${process.env.NODE_ENV} mode`);
});