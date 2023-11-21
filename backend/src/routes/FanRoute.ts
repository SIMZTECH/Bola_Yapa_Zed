import express  from "express";
import { getFootballFan,getAllFootballFans} from "../controllers/FansController";
import { authenticate,restrict } from "../auth/AuthVerify";
const router = express.Router({mergeParams:true});


router.get("/get-football-fan/:fanId",getFootballFan);
router.get("/get-allfootball-fans",getAllFootballFans);


export default router;