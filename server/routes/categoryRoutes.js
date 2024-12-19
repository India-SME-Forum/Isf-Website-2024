import express from "express";
import { addCategories, addNewSubsection, addSingleCategory, createSubCategory, deleteSingleCategory, deleteSubcategory, deleteSubsection, getCategories, } from "../controllers/addCategories.js";
const catRouter = express.Router();

catRouter.post("/create", addCategories); // Bulk categoryAdd
catRouter.get("/fetch", getCategories); // Fetch all categories
catRouter.post("/addsinglecatgeory", addSingleCategory); //Add single Category
catRouter.post("/addnewsubsection", addNewSubsection); // Add subSection
catRouter.delete('/deletesinglecategory',deleteSingleCategory) //delete single category
catRouter.delete('/deletesubsection',deleteSubsection)
catRouter.post('/createsubcategory',createSubCategory)
catRouter.delete('/deletesubcategory',deleteSubcategory)
export default catRouter;