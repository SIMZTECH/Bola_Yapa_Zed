import express  from "express";
import { 
    createTeam,
    removeTeam,
    getAllTeams,
    getSingleTeam,
    updateAllTeams,
    updateTeam,
    selectTeam 
} from "../controllers/TeamController";
import coachRoute from '../routes/CoachRoute';
import { authenticate,restrict } from "../auth/AuthVerify";

const router = express.Router({mergeParams:true});

//nested route
// router.use("/:teamId",coachRoute);

router.post("/create-team",authenticate,restrict(["admin"]),createTeam);
router.get("/get-All-teams",getAllTeams);
router.get("/get-single-team/:id",getSingleTeam);
router.delete("/remove-team",authenticate,removeTeam);
router.put("/update-team/:teamId",updateTeam);
router.post("/select-team/:teamId",authenticate,selectTeam);


export default router;