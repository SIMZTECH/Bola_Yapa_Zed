import {Schema,model,Types} from 'mongoose';

export interface ITeam{
   name:string,
   logo:string,
   coach:any,//ref coach
   players:[],//ref player
   staff:[],
   stadium:Array<any>,//ref stadium model
   net_worth:number,
   transfers:[],//make own modal
   team_news:[],
   team_fixure:[],
   fans:[],
   approved:string,
};

const teamSchema = new Schema<ITeam>({
    name:{type:String,required:true},
    logo:{type:String,required:true},
    coach:{
        type:Types.ObjectId,
        ref:"Coach"
    },
    players:[{type:Array}],
    staff:[{type:Array}],
    stadium:[{
        type:Types.ObjectId,
        ref:"Stadium"
    }],
    transfers:[{
        type:Types.ObjectId,
        ref:"Transfers"
    }],
    team_news:[{
        type:Array,
    }],
    team_fixure:[{
        type:Types.ObjectId,
        ref:"Fixture"
    }],
    fans:[{
        type:Types.ObjectId,
        ref:"User"
    }],
    approved:{
        type:String,
        enum:["declined","pending","approved"],
        default:"pending"
    }
},{timestamps:true});

const Team = model<ITeam>("Team",teamSchema);

export default Team;