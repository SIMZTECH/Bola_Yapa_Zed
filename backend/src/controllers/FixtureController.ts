import {HydratedDocument, Types} from "mongoose";
import { Request,Response } from "express";
import Fixture,{ IFixure } from "../models/Fixture";
import User, { IUser } from "../models/User";
import Team, { ITeam } from "../models/Team";


// APIs falls here

// TODO:create fixture
export const createFixture=async(req:Request,res:Response)=>{
    
    // logic
    /*
    section_1 For home team
     - get user ID and use it to find user
     - from found user extract team Id
     - use Team Id to get team information
    
    section-2 away team
    - get away team id from body request
    - use obtained away team id to find team and get details

    finally
    - invoke Fixture model to save details

    */
   try {
    const _foundUser:HydratedDocument<IUser> = await User.findById(req.userId);
    if(!_foundUser){
        res.status(404).json({
            status:false,
            message:"You cannot create fixture because user does not exist"
        });
    }else{
        const _foundTeamHome:HydratedDocument<ITeam> = await Team.findById(_foundUser?.team?._id); 
        const _foundTeamAway:HydratedDocument<ITeam> = await Team.findById(req.body.awayTeam); 

        if(_foundTeamHome?.approved!="approved" || _foundTeamAway?.approved!="approved"){
            throw new Error("you are trying to create fixure with team not yet approved!");
        }

        if(_foundTeamHome && _foundTeamAway){
            const _newFixure:HydratedDocument<IFixure> = new Fixture({
                homeTeam:_foundTeamHome._id,
                awayTeam:_foundTeamAway._id,
                date:new Date(`${req.body.date}`).toLocaleString("US",{day:"numeric",month:"long",year:"numeric"}),
                time:req.body.time,
                stadium:req.body.stadium,
                approved:req.body.approved,
                category:req.body.category
            });

            const _createdFixture = await _newFixure.save();
            if(_createdFixture){
                // update by pushing the created fixture in home and away team
                await Team.findByIdAndUpdate(_foundTeamHome._id,{$push:{team_fixure:_createdFixture._id}},{new:true});
                await Team.findByIdAndUpdate(_foundTeamAway._id,{$push:{team_fixure:_createdFixture._id}},{new:true});

                res.status(200).json({
                    status:true,
                    message:"Fixture created successfully",
                    data:_createdFixture
                });
            }else{
                throw new Error("Failed to create fixture");
            }
            
        }else{
            throw new Error("Something went wrong in the fixture creation process");
        }
    }
   } catch (error) {
    res.status(500).json({
        status:500,
        message:error.message
    });
   }
};

// TODO:get one fixture

// TODO:get all fixtures
export const getAllFixtures = async(req:Request,res:Response)=>{

    const _search = req.query.search; 

    // create Fixture index for search text

    // logic
    // getFixures by querry or by all

    try {
        if(req.query?.search){
            const _foundSearchedData = await Fixture.find({$text:{$search:`${_search}`}})
            .populate([
                {path:"homeTeam",select:"name logo"},
                {path:"awayTeam",select:"name logo"}
            ]);
            res.status(200).json({
                status:true,
                message:"Search completed successfully",
                data:_foundSearchedData
            });
        }else{
            const _foundFixtures = await Fixture.find({})
            .populate([
                {path:"homeTeam",select:"name logo"},
                {path:"awayTeam",select:"name logo"}
            ]);
            res.status(200).json({
                status:true,
                message:(_foundFixtures.length>0)?"All fixtures have been retrieved successfully":"No records found",
                data:_foundFixtures
            });
        }
        
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message,
        }); 
    }
};

// TODO:update fixture

// TODO:delete fixure