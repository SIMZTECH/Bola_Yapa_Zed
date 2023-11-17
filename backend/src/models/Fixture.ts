import {Schema,model,Types} from 'mongoose';

export interface IFixure{
    date:string,
    category:string,
    awayTeam:any,//will contain the team deatils
    homeTeam:any,//will contain the team deatils
    isMatchApproved:boolean
};

const fixtureSchema = new Schema<IFixure>({
    date:{type:String},
    category:{
        type:String,
        enum:["derby","regular","madalas"],
        default:"regular"
    },
    homeTeam:{
        type:Types.ObjectId,
        ref:"Team"
    },
    awayTeam:{
        type:Types.ObjectId,
        ref:"Team"
    },
    isMatchApproved:{type:Boolean,default:false}
   
},
{timestamps:true}
);

const Fixture = model<IFixure>("Fixture",fixtureSchema);

export default Fixture;