import express from "express";
import { addCategories, addNewSubsection, addSingleCategory, getCategories } from "../controllers/addCategories.js";
const catRouter = express.Router();

catRouter.post("/create", addCategories); // Bulk categoryAdd
catRouter.get("/fetch", getCategories); // Fetch all categories
catRouter.post("/createsingle", addSingleCategory); //Add single Category
catRouter.post("/addnewsubsection", addNewSubsection); // Add subSection
export default catRouter;