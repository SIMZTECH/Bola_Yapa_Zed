import express  from "express";
import {getAdmin,upDateAdmin} from '../controllers/AdminController';
import { authenticate,restrict } from "../auth/AuthVerify";

const router = express.Router({mergeParams:true});


router.get("/get-admin",authenticate,restrict(['admin']),getAdmin);
router.put("/update-admin-profile",authenticate,restrict(['admin']),upDateAdmin);



export default router;