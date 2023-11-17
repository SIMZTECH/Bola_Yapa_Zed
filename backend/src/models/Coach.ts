import {Schema,model,Types} from 'mongoose';

export interface ICoach{
    name:string,
    password:string,
    email:string,
    phone:number,
    dob:string,
    role:string,
    photo:string,
    team:any,//team id
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
    photo:{type:String},
    team:{
        type:Types.ObjectId,
        ref:"Team"
    },
    experience:[{type:Array}],
    comments:[{
        type:Types.ObjectId,
        ref:"Comments"
    }],
    approved:{
        type:String,
        enum:["declined","pending","approved"],
        default:"pending"
    }
},{timestamps:true});

const Coach = model<ICoach>("Coach",coachSchema);

export default Coach;