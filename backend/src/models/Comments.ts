import {Schema,model,Types} from 'mongoose';

interface IComment{
    user:any,
    coach:any,
    message:string,
    likes:number,
    dislikes:number,
    love:number 
};

const CommentsSchema = new Schema<IComment>({
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

const Comments = model<IComment>("Comments",CommentsSchema);

export default Comments;