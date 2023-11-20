import {Schema,model,Types} from 'mongoose';

export type ITeamType={
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
    admin:Types.ObjectId
 };

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
   fans:Array<Types.ObjectId>,
   admin:[],
   approved:string,
};

const teamSchema = new Schema<ITeam>({
    name:{type:String,required:true,unique:true},
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
    admin:[{
        type:Types.ObjectId,
        ref:"User"
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
// advanced querries for manipulating the model
//populate admin details
teamSchema.pre("find",function(next){
    this.populate([{
        path:"admin",
        // model:'User'
        select:"name approved"
    },
    {
        path:"fans",
        // model:'User'
        select:"name approved"
    }]);

    next();
});

const Team = model<ITeam>("Team",teamSchema);

export default Team;