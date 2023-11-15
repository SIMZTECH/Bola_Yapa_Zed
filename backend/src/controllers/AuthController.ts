// this contains user authentication APIs
import User from "../models/User";
import Coach from "../models/Coach";
import {Response,Request} from "express";
import bcryptjs from 'bcryptjs';

// check user existance
const checkUserExistance=async(req:Request):Promise<[]>=>{
    const {email,role} = req.body;
    var user=null;

    try {
        if(role=="fan"||role=="admin"){
            user = await User.find({email:email});
        }

        if(role=="coach"){
            user = await Coach.find({email:email});
        }
        
    } catch (error) {
        
    }

    return user;
};

const saveUser=async(req:Request)=>{
    const {name,role,email,password} = req.body;
    var newUser=null;

    try {
        // encrypt user password
        const salt = await bcryptjs.genSalt(10);
        const encryptedPassword = await bcryptjs.hash(password,salt);

        newUser = new User({
            name:name,
            email:email,
            password:encryptedPassword,//add encryption
            role:role
        });
        
    } catch (error) {
         
    }

    return await newUser.save();
};

// TODO:Register controller
export const registerUser=async(req:Request,res:Response)=>{
    
    try {
        // check user
        var user = await checkUserExistance(req);
        if(user.length>0){
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



// TODO:Login controller