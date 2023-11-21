// stadium APIs falls here
import Stadium,{ IStadium} from "../models/Stadiums";
import { Request,Response } from "express";
import User,{IUser} from "../models/User";
import Team,{ITeam} from "../models/Team";
import { HydratedDocument } from "mongoose";

// create stadium
export const createStadium = async(req:Request,res:Response)=>{

    try {
        const _foundUser:HydratedDocument<IUser> = await User.findById(req.userId);
         // create stadium
        if(_foundUser?.team){
            const _foundTeam:HydratedDocument<ITeam> = await Team.findById(_foundUser.team); 
            const newStadium:HydratedDocument<IStadium> = new Stadium({
                name:req.body.name,
                photo:req.body.photo,
                capacity:req.body.capacity,
                location:req.body.location,
                description:req.body.description
            });

            const _savedStadium = await newStadium.save();

            if(_savedStadium){
                await Team.findByIdAndUpdate(_foundTeam._id,{$push:{stadium:_savedStadium._id}});

                res.status(200).json({
                    status:true,
                     message:"stadium saved successfully",
                });
            }

        }else{
                res.status(404).json({
                    status:false,
                    message:"You are not assigned to any team yet",
                });
        }
        
    } catch (error) {
        res.status(500).json({
            status:false,
            message:"Something went wrong, try again later",
        });
    }
};

// create stadium
export const updateStadium = async(req:Request,res:Response)=>{
    // TODO:: logic for update stadium


};



// create stadium
export const deleteStadium = async(req:Request,res:Response)=>{




};


// create stadium
export const getStadium = async(req:Request,res:Response)=>{




};


// create stadium
export const getAllStadiums = async(req:Request,res:Response)=>{




};