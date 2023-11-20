//Fans APIs falls here
// TODO::implement
// import {HydratedDocument} from "mongoose";
// import Coach,{ICoach} from "../models/Coach";
// import {Request,Response} from 'express';
// import Team, { ITeam } from "../models/Team";
// import User,{IUser} from "../models/User";


// // method for selecting a team
// export const selectTeam = async(req:Request,res:Response)=>{

//     try {

//         const _foundUser:HydratedDocument<ITeam> = await Team.findById(req.params.teamId);

//         if(_foundUser){

//             res.status(200).json({
//                 status:true,
//                 message:"record retrived successfully",
//                 data:_foundUser
//             });

//         }else{
//             res.status(404).json({
//                 status:false,
//                 message:"No record was found",
//                 data:_foundUser
//             })
//         }
//     } catch (error) {
//         res.status(500).json({
//             status:false,
//             message:"something went wrong,try again",
//             data:error
//         })
//     }
// };

// export const getAllCoachesProfile = async(req:Request,res:Response)=>{
//     try {
//         const _foundCoach = await Coach.find({});
//         if(_foundCoach.length>0){
//             res.status(200).json({
//                 status:true,
//                 message:"All coaches retrived retrived",
//                 data:_foundCoach
//             })
//         }else{
//             res.status(404).json({
//                 status:false,
//                 message:"No record of coaches was found",
//                 data:_foundCoach
//             })
//         }
//     } catch (error) {
//         res.status(500).json({
//             status:false,
//             message:"something went wrong,try again",
//             data:error
//         })
//     }
// };


// export const updateUserProfile = async(req:Request,res:Response)=>{
//     try {
//        const _foundUser:HydratedDocument<IUser> = await User.findById(req.userId);
//        if(_foundUser){
//         res.status(200).json({
//             status:true,
//             message:"Team updated successfully"
//         })
//        }
//     } catch (error) {
//         res.status(500).json({
//             status:false,
//             message:"something went wrong,try again",
//             data:error
//         }) 
//     }
// };

// export const deleteCoachProfile = async(req:Request,res:Response)=>{
//     try {
//         const _foundCoach:HydratedDocument<ICoach> = await Coach.findByIdAndDelete(req.params.coachId);

//        if(_foundCoach){
//             res.status(200).json({
//                 status:true,
//                 message:"Coach deleted successfully!!",
//             })
//        }else{
//         res.status(500).json({
//             status:false,
//             message:"Record not found",
//         }) 
//        }
//     } catch (error) {
//         res.status(500).json({
//             status:false,
//             message:"something went wrong,try again",
//             data:error
//         }) 
//     }
// };

// // employ coach {should fall in team admin}
// export const employCoach = async(req:Request,res:Response)=>{
//     try {
//         // check if team aready has a coach
//         const _foundUser = await User.findById(req.userId);

//       //check if user(Admin has a team) 
//       if(!_foundUser.team){
//         res.status(402).json({
//             status:false,
//             message:`You don't have a team, please get a team to proceed`,
//         })
//       }else{
//         // get team by id
//         const _foundTeam = await Team.findById(_foundUser.team._id);

//         // update team with coach

//         // update coach with team
//         const _foundCoach = await Coach.findById(req.params.coachId);

//       }

//     } catch (error) {
        
//     }
// };


// // fire coach



