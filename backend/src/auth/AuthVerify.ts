import express,{NextFunction, Request,Response} from 'express';
import jwt  from 'jsonwebtoken';
import User from '../models/User';
import Coach from '../models/Coach';


export const authenticate = async(req:Request,res:Response,next:NextFunction)=>{

    const authToken = req.headers.authorization; 

    if(!authToken || !authToken.startsWith("Bearer")){
        res.status(200)
        .json({
            status:false,
            message:"invalid token"
        });
    }

    try {
       const token = authToken.split(" ")[1];
       const decoded:any = jwt.verify(token,process.env.JWT_SECRET_KEY);

       req.userId = decoded.userId;
       req.role=decoded.role;

        next();
    } catch (error) {
        res.status(500)
        .json({
            status:false,
            message:"something went wrong,try again"
        }); 
    }
};

export const restrict=(roles:Array<string>)=> async(req:Request,res:Response,next:NextFunction)=>{

    try {
        var user=null;
        const _foundUser = await User.findById(req.userId);
        const _foundCoach = await Coach.findById(req.userId);
        
        if(_foundUser){
           user= _foundUser;
        }

        if(_foundCoach){
            user=_foundCoach
        }

        if(!roles.includes(user?.role)){
            res.status(403)
            .json({
                status:false,
                message:"you are not authorized",
                data:user
            });

        }

        next();
        
    } catch (error) {
        res.status(500)
        .json({
            status:false,
            message:"something went wrong, try again later",
            data:error
        })
     }
};