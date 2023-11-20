import {Schema,model,Types} from 'mongoose';

export interface IPost{
    user:any,
    coach:any,
    message:string,
    likes:number,
    dislikes:number,
    love:number 
};

const PostSchema = new Schema<IPost>({
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

const Post = model<IPost>("Post",PostSchema);

export default Post;