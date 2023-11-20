// Team APIs falls here
import { HydratedArraySubdocument, HydratedDocument, HydratedDocumentFromSchema } from "mongoose";
import Team,{ITeam} from "../models/Team";
import Coach,{ICoach} from "../models/Coach";
import {Request,Response} from 'express';
import User, { IUser } from "../models/User";

export const getSingleTeam = async(req:Request,res:Response)=>{
    try {
        const _foundTeam:HydratedDocument<ITeam> = await Team.findById(req.params.id);
        if(_foundTeam){
            res.status(200).json({
                status:true,
                message:"record retrived successfully",
                data:_foundTeam
            })
        }else{
            res.status(404).json({
                status:false,
                message:"No record was found",
                data:_foundTeam
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

export const getAllTeams = async(req:Request,res:Response)=>{
    try {
        const _foundTeam = await Team.find({})
        .populate(["admin","fans"]);
        if(_foundTeam.length>0){
            res.status(200).json({
                status:true,
                message:"All teams retrived",
                data:_foundTeam
            })
        }else{
            res.status(404).json({
                status:false,
                message:"No record of teams was found",
                data:_foundTeam
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

export const createTeam = async(req:Request,res:Response)=>{

    // admin handles team creation and management
    try {
        const _foundUser = await User.findById(req.userId);

        if(!_foundUser.team){
            const newTeam:HydratedDocument<ITeam> = new Team(req.body);
            const _savedTeam=await newTeam.save();

            // assign admin with team and also team with admin
            await Team.findByIdAndUpdate(_savedTeam._id,{$push:{admin:_foundUser._id}});
            await User.findByIdAndUpdate(_foundUser._id,{$set:{team:_savedTeam._id}},{new:true});

            res.status(200).json({
                status:true,
                message:"new team has been added succssfully!!!",
            })
        }else{
            res.status(401).json({
                status:false,
                message:"You cannot create team, because you are already an admin",
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

export const removeTeam = async(req:Request,res:Response)=>{
    try {
        const _founderUser:HydratedDocument<IUser> = await User.findById(req.userId);

        if(_founderUser.team && _founderUser.role=="admin"){
            // remove team from admin model and team model
            const _foundTeam:HydratedDocument<ITeam> = await Team.findByIdAndDelete(_founderUser.team._id);
            await User.findByIdAndUpdate(_founderUser._id,{$set:{team:null}},{new:true});

            res.status(200).json({
                status:true,
                message:"team deleted successfully",
                data:_foundTeam
            })
        }else if(_founderUser.team && _founderUser.role=="fan"){
             await Team.findByIdAndUpdate(_founderUser.team._id,{$pull:_founderUser._id});
             await User.findByIdAndUpdate(_founderUser._id,{$set:{team:null}},{new:true});
        } else{
            res.status(404).json({
                status:false,
                message:`You have no team to remove ${_founderUser.role=="admin"?', create one':''}`,
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

export const updateTeam = async(req:Request,res:Response)=>{

    // TODO::ensure that a specified admin updates the team content

    try {
        const _foundTeam:HydratedDocument<ITeam> = await Team.findByIdAndUpdate(req.params.teamId,{$set:req.body},{new:true});
        // update the coach and player models for ids,
        if(_foundTeam){ 
            res.status(200).json({
                status:true,
                message:"team updated successfully",
            });
        }
    } catch (error) {
        res.status(500).json({
            status:false,
            message:"something went wrong,try again",
            data:error
        }) 
    }
};

export const updateAllTeams = async(req:Request,res:Response)=>{

    // TODO::create the api

};


// select team api
export const selectTeam = async(req:Request,res:Response)=>{

    try {
        // user variable
        var user:HydratedDocument<IUser|ICoach>=null;

        const _foundUser:HydratedDocument<IUser> = await User.findById(req.userId);
        const _foundCoach:HydratedDocument<ICoach> = await Coach.findById(req.userId);

        const team:HydratedDocument<ITeam>=await Team.findById(req.params.teamId);

        if(_foundUser){
            user=_foundUser;
        }

        if(_foundCoach){
            user=_foundCoach
        }

        // check if fan or chach id exists on team
        if(!user.team && user.role=="fan"){
            // select team and assign a fan to the team and a team id in user model
            const checkUserExistence = team?.fans.find(value=>value._id==req.userId);

            if(checkUserExistence==undefined){
                const _foundTeam = await Team.findByIdAndUpdate(req.params.teamId,{$push:{fans:req.userId}});
                if(_foundTeam){
                    await User.findByIdAndUpdate(user._id,{$set:{team:_foundTeam._id}});
                        res.status(200).json({
                        status:true,
                        message:"Team selected successfully",
                        data:_foundTeam
                    });
                }
            }else{
                const team_name = (team)?team.name:'';
                res.status(404).json({
                    status:false,
                    message:`Oops, you are already ${user.role=="fan"?'a fan':'a coach'} of ${team_name}`
                })   
            }
           
        }else if(!user.team&&user.role=="coach"){
            const _foundTeam = await Team.findByIdAndUpdate(req.params.teamId,{$set:{coach:req.userId}});
            if(_foundTeam){
                await Coach.findByIdAndUpdate(user._id,{$set:{team:_foundTeam._id}});
                res.status(200).json({
                    status:true,
                    message:"Team selected successfully",
                    data:_foundTeam
                });
            }
        }else{

            const team_name = (team)?team.name:'';
            res.status(404).json({
                status:false,
                message:`You cannot select this team because, you already have ${team_name} as your team`
            })
        }
    } catch (error) {
        res.status(500).json({
            status:false,
            message:"something went wrong,try again",
            data:error
        });
    }
};