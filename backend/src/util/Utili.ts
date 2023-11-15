import mongoose from "mongoose";

// connect to database
export const connectToDatabse = async(url:string)=>{
    try {
      await mongoose.connect(url);
      console.log("Server has Connected to mongo database successfully");
    } catch (error) {
        console.log(`${error.message}`);
    }
};

