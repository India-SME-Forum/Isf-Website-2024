import express from "express";
import { addCategories, addSingleCategory, getCategories } from "../controllers/addCategories.js";
const catRouter = express.Router();

catRouter.post("/create", addCategories);
catRouter.get("/fetch", getCategories);
catRouter.post("/createsingle", addSingleCategory);
export default catRouter;