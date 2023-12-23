import {Schema,model,Types} from 'mongoose';

export interface IComments{
    user:any,
    coach:any,
    message:string,
    likes:number,
    dislikes:number,
    love:number 
};

const commentsSchema = new Schema<IComments>({
    user:{
        type:Types.ObjectId,
        ref:"User"
    },
    coach:{
        type:Types.ObjectId,
        ref:"Coach"
    },
    message:{type:String,min:1,max:250},
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0
    },
    love:{
        type:Number,
        default:0
    },
},
{timestamps:true}
);

const Comments = model<IComments>("Comments",commentsSchema);

export default Comments;