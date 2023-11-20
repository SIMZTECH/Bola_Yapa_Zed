import {Schema,model,Types} from 'mongoose';

export interface IExperience{
    team:any,//ref to team worked
    duration:string,
    description:string,//will contain the team deatils
    recommendation:string,//will contain the team deatils
};

const experienceSchema = new Schema<IExperience>({
    team:{
        type:Types.ObjectId,
        ref:"Team"
    },
    duration:{
        type:String,
    },
    description:{
        type:String,
    },
    recommendation:{
        type:String,
        enum:["Average","Good","Experienced"],
        default:"Good"
    }
},{timestamps:true});

const CoachExperience = model<IExperience>("CoachExperience",experienceSchema);

export default CoachExperience;