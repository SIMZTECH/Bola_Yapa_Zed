import express  from "express";
import { createFixture,getAllFixtures} from "../controllers/FixtureController";
import { authenticate,restrict } from "../auth/AuthVerify";

const router = express.Router();


router.post("/create-fixture",authenticate,restrict(["admin"]),createFixture);
router.get("/getFixtures",getAllFixtures);


export default router;