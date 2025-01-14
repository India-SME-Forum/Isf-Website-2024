import 'dotenv/config'
import express from "express";
import cors from 'cors'
import { connectDB } from './mongodb.js';
import catRouter from './routes/categoryRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import path from 'path'
const PORT = process.env.PORT || 5000
const app = express()

const corsOptions = {
    origin: [process.env.FRONTEND_URL,],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'], //access-control-allow-credentials:true
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
app.use(express.json())
const _dirname = path.dirname("")
const buildpath = path.join(_dirname, '../client/dist')
app.use(express.static(buildpath))
app.use(cors())
app.use('/api/v1/categories',catRouter)
app.use(errorHandler)
// mongo db connection

connectDB()
app.listen(PORT,  async () => {
  console.log(`Server running at  ${PORT} in ${process.env.NODE_ENV} mode`);
});