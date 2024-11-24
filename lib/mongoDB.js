import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const connectMongoDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.mongodb_URI)
        console.log('Database is connected : ', connect.connection.name)
    } catch (error) { 
        console.log("couldn't connect with database")
    }
}   