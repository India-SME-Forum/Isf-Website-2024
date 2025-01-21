import "dotenv/config";
import express, { response } from "express";
import cors from "cors";
import { connectDB } from "./mongodb.js";
import catRouter from "./routes/categoryRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import path from "path";

const PORT = process.env.PORT;
const app = express();

const corsOptions = {
  origin: [process.env.FRONTEND_URL,'http://localhost:3000'],
  credentials: false,
  methods: ["GET", "POST", "PUT", "DELETE"], //access-control-allow-credentials:true
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.json());

app.use(cors( corsOptions));
// app.use('/' , express.static(path.join(__dirname, '../client/dist')))
app.use("/api/v1/categories", catRouter);
app.use(errorHandler);
// mongo db connection
connectDB();
app.listen(PORT, async (req,res) => {
   
  console.log(`Server running at  ${PORT} in ${process.env.NODE_ENV} mode`);
});
