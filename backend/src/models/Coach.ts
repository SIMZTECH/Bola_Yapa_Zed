import {Schema,model,Types} from 'mongoose';

interface ICoach{
    name:string,
    email:string,
    phone:number,
    dob:string,
    role:string,
    photo:string,
    team:string,
    experience:Array<any>,
    teamMembers:Array<any>,
    comments:Array<string>,
    isApproved:Boolean
};

const userSchema = new Schema<ICoach>({
    name:{type:String,required:true},
    email:{type:String,require:true,unique:true},
    phone:{type:Number},
    dob:{type:String},
    role:{type:String},
    photo:{type:String},
    team:{type:String},
    teamMembers:[{
        type:Types.ObjectId,
        ref:"TeamMembers"
    }],
    experience:[{
        type:Types.ObjectId,
        ref:"CoachExperience"
    }],
    isApproved:{
        type:Boolean,
        default:false
    }
});

const Coach = model<ICoach>("User",userSchema);

export default Coach;