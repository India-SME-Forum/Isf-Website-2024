import asyncHandler from "express-async-handler";

export const errorHandler = async (err, req, res, next) => {
 
 
  res.status(err?.statusCode || 500).json({
    //add staus code
    status: err?.statusCode || 500,
    message: err?.message||'Internal Server Error',
    stack: err?.stack || 'No Stack',
  })
}
