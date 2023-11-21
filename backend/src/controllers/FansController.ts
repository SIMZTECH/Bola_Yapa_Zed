//Fans APIs falls here
// TODO::implement
import {HydratedDocument} from "mongoose";
import Coach,{ICoach} from "../models/Coach";
import {Request,Response} from 'express';
import Team, { ITeam } from "../models/Team";
import User,{IUser} from "../models/User";


// api for specific user(fan) bg fan id
export const getFootballFan = async(req:Request,res:Response)=>{
    try {
        const _foundUser:HydratedDocument<IUser> = await User.findById(req.params.fanId);
        const {password,...rest} = _foundUser.toJSON();
        if(_foundUser.role=="fan"){
            res.status(200).json({
                status:true,
                message:"record retrived successfully",
                data:{...rest}
            });
        }else{
            res.status(404).json({
                status:false,
                message:"No record was found",
                data:_foundUser
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

// get all football fans
export const getAllFootballFans = async(req:Request,res:Response)=>{
    try {
        const _foundUsers:HydratedDocument<IUser>[] = await User.find({role:"fan"});
        if(_foundUsers.length>0){
            res.status(200).json({
                status:true,
                message:"record retrived successfully",
                data:_foundUsers
            });
        }else{
            res.status(404).json({
                status:false,
                message:"No record was found",
                data:_foundUsers
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
