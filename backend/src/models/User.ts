import {Schema,model,Types} from 'mongoose';

interface IUser{
    name:string,
    email:string,
    password:string,
    phone:number,
    dob:string,
    role:string,
    photo:string,
    team:any,
    comments:Array<string>,
    analytics:Array<number>,
    isApproved:Boolean
};

const userSchema = new Schema<IUser>({
    name:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,require:true,unique:true},
    phone:{type:Number},
    dob:{type:String},
    role:{
        type:String,
        enum:["fan","admin"],
        default:"fan"
    },
    photo:{type:String},
    team:{
        type:Types.ObjectId,
        ref:"Team"
    },
    comments:[{
        type:Types.ObjectId,
        ref:"Comments"
    }],
    analytics:[{
        type:Types.ObjectId,
        ref:"Analytics"
    }],
    isApproved:{
        type:Boolean,
        default:false
    }

});

const User = model<IUser>("User",userSchema);

export default User;