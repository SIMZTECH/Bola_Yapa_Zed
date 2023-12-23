// this contains user authentication APIs
import User,{IUser} from "../models/User";
import Coach,{ICoach} from "../models/Coach";
import {Response,Request} from "express";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Team from "../models/Team";

// check user existance
const checkUserExistance=async(req:Request):Promise<{}>=>{
    const {email,role} = req.body;
    var user=null;

    try {
        if(role==="fan"||role==="admin"){
            user = await User.findOne({email:email});
        }
        if(role==="coach"){
            user = await Coach.findOne({email:email});
        }
    } catch (error) {
        
    }
    return user;
};

// save user data
const saveUser=async(req:Request)=>{
    const {name,role,email,password,gender,policies} = req.body;

    var newUser=null;

    try {
        // encrypt user password
        const salt = await bcryptjs.genSalt(10);
        const encryptedPassword = await bcryptjs.hash(password,salt);

        if(role==="fan"||role==="admin"){
            newUser = new User({
                name:name,
                email:email,
                password:encryptedPassword,//add encryption
                role:role,
                gender:gender,
                agreement:policies
            });
        }

        if(role==="coach"){
            newUser = new Coach({
                name:name,
                email:email,
                password:encryptedPassword,//add encryption
                role:role,
                gender:gender,
                agreement:policies
            });
        }
        
    } catch (error) {
         
    }

    return await newUser.save();
};

// TODO::generate token method
const generateToken = (user:any)=>{
    return jwt.sign({userId:user._id,role:user.role},process.env.JWT_SECRET_KEY);
};

//Register controller
export const registerUser=async(req:Request,res:Response)=>{
    
    try {
        // check user
        var user = await checkUserExistance(req);
        if(user){
            res.status(404).json({
                status:false,
                message:"User Already Exists",
                data:user
            });
        }else{
            // save user details
            var savedUser = await saveUser(req);
            if(savedUser){
                res.status(200).json({
                    status:true,
                    message:"User Registered Successfully",
                    data:saveUser
                });
            }else{
                res.status(404).json({
                    status:false,
                    message:"Failed to register user",
                    data:saveUser
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            status:false,
            message:"Something went wrong",
            data:error
        });
    }
};

//Login controller
export const userLogin =async(req:Request,res:Response)=>{
    const {email,password} = req.body;

    var user = null;

    try {
        // find if user(fan,admin) or manager(coach)
        const _foundUser = await User.findOne({email:email})
        .populate({path:"team",model:Team});
        
        const _foundCoach = await Coach.findOne({email:email})
        .populate({path:"team",model:Team});
        
        if(_foundUser){
            user = _foundUser;
        }

        if(_foundCoach){
            user = _foundCoach;
        }

        if(user){
            // compare password
            const matchedPassword = await bcryptjs.compare(password,user.password);
            // get token
            const token = generateToken(user);
            const {role,...rest} = user.toJSON();

            (matchedPassword)?res.status(200).json({
                status:true,
                message:"You have successfully loged in",
                data:{...rest},
                token:token,
                role:role
            }):res.status(401).json({
                status:false,
                message:"invalid credentials"
            });
        }else{
            res.status(404).json({
                status:false,
                message:"account not found",
                data:user
            });
        }
    } catch (error) {
        res.status(500).json({
            status:false,
            message:"server is down,try again later",
            data:error.message
        });
    }
};