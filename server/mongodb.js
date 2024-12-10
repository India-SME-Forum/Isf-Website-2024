import mongoose from "mongoose";
import  dotenv from "dotenv";
import asyncHnadler from "express-async-handler";

export const connectDB = asyncHnadler(async (req, res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host} in ${process.env.NODE_ENV} mode`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        
    }
})   