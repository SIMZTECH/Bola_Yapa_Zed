import { Response,Request } from "express";
import User, { IUser } from "../models/User";
import { HydratedDocument } from "mongoose";
import Team,{ITeam} from "../models/Team";

// get admin details
export const getAdmin = async(req:Request,res:Response)=>{
    try {
        const __foundAdmin:HydratedDocument<IUser> = await User.findById(req.userId);
        if(__foundAdmin){
            res.status(200).json({
                status:true,
                message:"record retrived successfully",
                data:__foundAdmin
            })
        }else{
            res.status(404).json({
                status:false,
                message:"No record was found",
                data:__foundAdmin
            })
        }
    } catch (error) {
        res.status(500).json({
            status:false,
            message:"something went wrong,try again",
            data:error
        })
    }
};

// get all admin details

// update admin details
// get admin details
export const upDateAdmin = async(req:Request,res:Response)=>{
    try {
        const __foundAdmin:HydratedDocument<IUser> = await User.findById(req.userId);
        if(__foundAdmin){
            // single update
            const _updatedAdmin = await User.findByIdAndUpdate(__foundAdmin._id,
                {$set:req.body},
                {new:true}
            )
            .populate({path:"team",model:Team})
            .select("-password");
            
            res.status(200).json({
                status:true,
                message:"profile updated successfully",
                data:_updatedAdmin
            })
        }else{
            res.status(404).json({
                status:false,
                message:"No record was found",
                data:__foundAdmin
            })
        }
    } catch (error) {
        res.status(500).json({
            status:false,
            message:"something went wrong,try again",
            data:error
        })
    }
};

// verify fans account

// post matches

// delete matches

// createa teams

// add stadiums