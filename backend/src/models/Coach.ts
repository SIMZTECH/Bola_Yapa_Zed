import {Schema,model,Types} from 'mongoose';

export interface ICoach{
    name:string,
    password:string,
    email:string,
    phone:number,
    dob:string,
    role:string,
    gender:string,
    photo:string,
    team:any,//team id
    agreement:string,
    experience:[],
    comments:[],
    approved:string
};

const coachSchema = new Schema<ICoach>({
    name:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,require:true,unique:true},
    phone:{type:Number},
    dob:{type:String},
    role:{type:String},
    gender:{type:String},
    photo:{type:String},
    team:{//note this will be updated from the owner of the model
        type:Types.ObjectId,
        ref:"Team"
    },
    agreement:{type:String},
    experience:[{
        type:Types.ObjectId,
        ref:"CoachExperience"
    }],
    comments:[{
        type:Types.ObjectId,
        ref:"Posts"
    }],
    approved:{
        type:String,
        enum:["declined","pending","approved"],
        default:"pending"
    }
},{timestamps:true});

const Coach = model<ICoach>("Coach",coachSchema);

export default Coach;