import {Schema,model,Types} from 'mongoose';

interface IFixure{
    date:string,
    stadiumName:string,
    location:string,
    category:string,
    // update line up from reference
    away:String,
    home:String,

    isMatchApproved:boolean
};

const userSchema = new Schema<IFixure>({
    date:{type:String},
    stadiumName:{type:String,min:1,max:30},
    location:{type:String,min:1,max:100},
    category:{
        type:String,
        enum:["derby","regular","madalas"],
        default:"regular"
    },
    home:{
        type:Types.ObjectId,
        ref:"HomeTeam"
    },
    away:{
        type:Types.ObjectId,
        ref:"AwayTeam"
    },
    isMatchApproved:{type:Boolean,default:false}
   
});

const Fixture = model<IFixure>("User",userSchema);

export default Fixture;