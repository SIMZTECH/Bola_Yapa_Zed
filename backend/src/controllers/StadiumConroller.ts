// stadium APIs falls here
import Stadium,{ IStadium} from "../models/Stadiums";
import { Request,Response } from "express";
import User,{IUser} from "../models/User";
import Team,{ITeam} from "../models/Team";
import { HydratedDocument } from "mongoose";
import Comments from "../models/Comments.";

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
                team:_foundTeam._id,//team id for the admin
                location:req.body.location,
                capacity:req.body.capacity,
                description:req.body.description
            });

            const _savedStadium = await newStadium.save();

            if(_savedStadium){
                await Team.findByIdAndUpdate(_foundTeam._id,{$push:{stadium:_savedStadium._id}});
                const _updatedUser = await User.findById(req.userId)
                .populate([
                    {path:"team",model:Team},
                    {path:"comments",model:Comments}])
                .select("-password");

                res.status(200).json({
                    status:true,
                     message:"stadium saved successfully",
                     data:_updatedUser
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
            message:error.message,
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
    try {
       const _foundUser:HydratedDocument<IUser> = await User.findById(req.userId);
       if(_foundUser && _foundUser?.team){
        const _foundTeam:HydratedDocument<ITeam> = await Team.findById(_foundUser?.team);
        if(_foundTeam?.stadium){
            const _foundStadiums = await Stadium.find({team:_foundTeam._id})
            .populate([
                {path:"team",select:["name","admin"]}
            ]);
            const numberOfItems:number =(_foundStadiums.length>0)?_foundStadiums.length:0;


            console.log(_foundStadiums,"found stadiums");

            res.status(200).json({
                status:true,
                message:`${numberOfItems} records were found`,
                data:_foundStadiums
            });

        }else{
            throw new Error("No stadium where found!!!");
        }

       }else{
        throw new Error("User either does not exist or has no team!!!");
       }
        
    } catch (error) {
        res.status(401).json({
            status:false,
            message:error.message
        })
    }
};