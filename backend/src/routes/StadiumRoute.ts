import express  from "express";
import { 
    createStadium,
    updateStadium,
    deleteStadium,
    getAllStadiums,
    getStadium
} from "../controllers/StadiumConroller";

import { authenticate,restrict } from "../auth/AuthVerify";
const router = express.Router({mergeParams:true});


router.post("/create-stadium",authenticate,restrict(["admin"]),createStadium);
// router.get("/get-allfootball-fans",getAllFootballFans);


export default router;