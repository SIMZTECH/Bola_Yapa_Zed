import { Express } from "express-serve-static-core";
import { Types } from "mongoose";

declare module "express-serve-static-core" {
  interface Request {
    userId:Types.ObjectId,
    role:string
  }
}