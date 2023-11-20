import express  from "express";
import { 
    getCoachProfile,
    getAllCoachesProfile,
    deleteCoachProfile,
    updateCoachProfile,
    employCoach
} from "../controllers/CoachController";
import { authenticate,restrict } from "../auth/AuthVerify";
import updateTeamRoute from './TeamRoute';

const router = express.Router({mergeParams:true});

//nested route
router.use("/get-coach/:coachId",updateTeamRoute);

// router.post("/create-team",createTeam);
router.get("/get-coach/:coachId",getCoachProfile);
router.get("/get-all-coaches",getAllCoachesProfile);
router.delete("/delete-coach/:coachId",deleteCoachProfile);
router.put("/update-coach/:coachId",updateCoachProfile);
router.post("/employ-coach/:coachId",authenticate,restrict(['admin']),employCoach);



export default router;