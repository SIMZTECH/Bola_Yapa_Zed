import express,{Application,Response,Request } from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import { connectToDatabse } from "./src/util/Utili";
import { authenticate,restrict } from "./src/auth/AuthVerify";

// routes
import authRoute from './src/routes/AuthRoute';
import teamRoute from './src/routes/TeamRoute';
import coachRoute from './src/routes/CoachRoute';
import fansRoute from './src/routes/FanRoute';
import stadiumRoute from './src/routes/StadiumRoute';

dotenv.config();

// TODO:Database methods

const app:Application = express();
const port = process.env.PORT||5000;
const dbUrl = process.env.DATABASE_URL;

mongoose.set('strictQuery',false);

const corsOptions = {
    origin:true
}

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// routes

app.use("/auth/api/v1",authRoute);
app.use("/team/api/v1",teamRoute);
app.use("/coach/api/v1",coachRoute);
app.use("/fan/api/v1",fansRoute);
app.use("/stadium/api/v1",stadiumRoute);



app.get("/",authenticate,restrict(["fan"]),(req:Request,res:Response)=>{
    res.status(200).json({
        status:true,
        message:"Welcome to typescript server"
    })
});

app.listen(port,()=>{
    connectToDatabse(dbUrl);
    console.log(`Server has started on port:${port}`);
});

