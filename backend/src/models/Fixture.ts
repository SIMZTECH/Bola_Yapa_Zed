import {Schema,model,Types} from 'mongoose';

export interface IFixure{
    date:string,
    time:string,
    category:string,
    awayTeam:any,//will contain the team deatils
    homeTeam:any,//will contain the team deatils
    approved:string,
    stadium:any
};

const fixtureSchema = new Schema<IFixure>({
    date:{type:String},
    time:{type:String},
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
    stadium:{
        type:String,
        // ref:'Stadium'
    },
    approved:{
        type:String,
        enum:["declined","pending","approved"],
        default:"pending"
    }
   
},{timestamps:true});

// create index for searching
fixtureSchema.index({'$**': 'text'});

const Fixture = model<IFixure>("Fixture",fixtureSchema);

export default Fixture;