import {Schema,model,Types} from 'mongoose';

export interface ITransfer{
   player:any,//ref to player model
   to_team:any,//ref team going to model
   from_team:any,//ref team coming from model
   approved:string,
};

const transfersSchema = new Schema<ITransfer>({
    player:{type:Types.ObjectId,ref:"Player"},
    to_team:{type:Types.ObjectId,ref:"Team"},
    from_team:{type:Types.ObjectId,ref:"Team"},
    approved:{
        type:String,
        enum:["declined","pending","approved"],
        default:"pending"
    }
},{timestamps:true});

const Transfers = model<ITransfer>("Team",transfersSchema);

export default Transfers;