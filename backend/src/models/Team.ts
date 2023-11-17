import {Schema,model,Types} from 'mongoose';

export interface ITeam{
   teamName:string,
   logo:string,
   coach:any,//coach id
   players:[],//player id
   staff:[],
   stadium:string,//make own model
   location:string,
   stadiumCapacity:number,
   teamWealth:number,
   transfers:[],
   teamNews:[],
   teamFixure:[],
   fans:[],
   isTeamApproved:boolean,
};

const teamSchema = new Schema<ITeam>({
    teamName:{type:String,required:true},
    logo:{type:String,required:true},
    coach:{
        type:Types.ObjectId,
        ref:"Coach"
    },
    players:[{type:Array}],
    staff:[{type:Array}],
    stadium:{type:String},
    stadiumCapacity:{type:Number,default:0},
    transfers:[{
        type:Array
    }],
    teamNews:[{
        type:Array,
    }],
    teamFixure:[{
        type:Types.ObjectId,
        ref:"Fixture"
    }],
    fans:[{
        type:Types.ObjectId,
        ref:"User"
    }],
    isTeamApproved:{
        type:Boolean,
        default:false
    }
});

const Team = model<ITeam>("Team",teamSchema);

export default Team;