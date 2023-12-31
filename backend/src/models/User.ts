import { NextFunction } from 'express';
import {Schema,model,Types} from 'mongoose';

export interface IUser{
    name:string,
    email:string,
    password:string,
    phone:number,
    dob:string,
    role:string,
    gender:string,
    photo:string,
    team:any,//team id
    agreement:string,
    comments:Array<string>,
    analytics:Array<number>,
    approved:string
};

const userSchema = new Schema<IUser>({
    name:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,require:true,unique:true},
    phone:{type:Number},
    dob:{type:String},
    role:{
        type:String,
        enum:["fan","admin"],
        default:"fan"
    },
    gender:{type:String},
    photo:{type:String},
    team:{
        type:Types.ObjectId,
        ref:"Team"
    },
    comments:[{
        type:Types.ObjectId,
        ref:"Comments"
    }],
    agreement:{type:String},
    analytics:[{
        type:Types.ObjectId,
        ref:"Analytics"
    }],
    approved:{
        type:String,
        enum:["declined","pending","approved"],
        default:"pending"
    }

},{timestamps:true});

const User = model<IUser>("User",userSchema);

export default User;