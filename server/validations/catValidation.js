import Joi from "joi";

export const addCategoryValidationSchema = Joi.object({
    sectionId: Joi.string().required(), // ID of the section
    subsectionTitle: Joi.string().required(), // Title of the subsection to add to
    newCategory: Joi.object({
      category: Joi.string().required(),
      url: Joi.string().uri().optional(),
      subcategories: Joi.array().items(
        Joi.object({
          category: Joi.string().required(),
          url: Joi.string().uri().optional(),
        })
      ).optional(),
    }).required(),
  });