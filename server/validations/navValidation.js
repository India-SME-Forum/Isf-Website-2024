import Joi from "joi";

export const addCategoryValidationSchema = Joi.object({
    section: Joi.string().required(),
    subsectionTitle: Joi.string().required(), // Title of the subsection to add to
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

  export const subSectionValidationSchema = Joi.object({
    section:Joi.string().required(),
    subsectionTitle: Joi.string().required(),
  })