import { NextFunction } from 'express';
import {Schema,model,Types} from 'mongoose';

export interface IStadium{
   name:string,
   photo:string,
   team:any,
   location:string,
   capacity:number,
   description:string,
   fittness:string,
};

const stadiumSchema = new Schema<IStadium>({
    name:{type:String,required:true},
    photo:{type:String,required:true},
    capacity:{type:Number,default:0},
    team:{
        type:Types.ObjectId,
        ref:"Team"
    },
    location:{type:String},
    description:{type:String},
    fittness:{
        type:String,
        enum:["bad","good","excellent"],
        default:"good"
    }
},{timestamps:true});

const Stadium = model<IStadium>("Stadium",stadiumSchema);

export default Stadium;