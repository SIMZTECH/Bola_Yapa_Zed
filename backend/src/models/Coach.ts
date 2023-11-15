import {Schema,model,Types} from 'mongoose';

interface ICoach{
    name:string,
    email:string,
    phone:number,
    dob:string,
    role:string,
    photo:string,
    team:any,//team id
    experience:[],
    comments:[],
    isApproved:Boolean
};

const coachSchema = new Schema<ICoach>({
    name:{type:String,required:true},
    email:{type:String,require:true,unique:true},
    phone:{type:Number},
    dob:{type:String},
    role:{type:String},
    photo:{type:String},
    team:{
        type:Types.ObjectId,
        ref:"Team"
    },
    experience:[{
        type:Types.ObjectId,
        ref:"CoachExperience"
    }],
    comments:[{
        type:Types.ObjectId,
        ref:"Comments"
    }],
    isApproved:{
        type:Boolean,
        default:false
    }
});

const Coach = model<ICoach>("Coach",coachSchema);

export default Coach;