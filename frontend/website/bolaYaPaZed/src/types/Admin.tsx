/* eslint-disable @typescript-eslint/no-explicit-any */

export type adminModelType = {
    name:string,
    email:string,
    password:string,
    phone:number,
    dob:string,
    role:string,
    gender:string,
    photo:string,
    team:any,//team id
    agreement:string,
    comments:Array<string>,
    analytics:Array<number>,
    approved:string
};