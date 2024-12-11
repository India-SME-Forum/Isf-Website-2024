import mongoose from "mongoose";
// Subcategory Schema
const SubcategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  url: { type: String }, // Optional: URL field for subcategories if they exist
});

// Category Schema
const CategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  url: { type: String }, // Optional: URL field for categories
  subcategories: [SubcategorySchema], // Optional: Subcategories if any
});

// Subsection Schema
const SubsectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  categories: [CategorySchema] , // Categories for each subsection
});

// Section Schema
const SectionSchema = new mongoose.Schema({
  section: { type: String, required: true },
  subsections: [SubsectionSchema], // Subsections under the section
});

// Main Schema for Categories
const categoryModel = mongoose.model('CategoryModel', SectionSchema);

export default categoryModel
