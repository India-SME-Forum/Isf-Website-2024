import Joi from "joi";

export const addCategoryValidationSchema = Joi.object({
    section: Joi.string().required(),
  
    title: Joi.string().required(), // Title of the subsection to add to
    categories: Joi.object({
      category: Joi.string().required(),
      url: Joi.string().optional(),
      subcategories: Joi.array().items(
        Joi.object({
          category: Joi.string().required(),
          url: Joi.string().optional(),
        })
      ).optional(),
    }).required(),
  });