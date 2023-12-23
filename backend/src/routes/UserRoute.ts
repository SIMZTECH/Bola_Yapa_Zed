import express  from "express";
import { getUserProfile } from "../controllers/UserController";
import { authenticate,restrict } from "../auth/AuthVerify";

const router = express.Router({mergeParams:true});


router.get("/get-user-profile",authenticate,getUserProfile);



export default router;