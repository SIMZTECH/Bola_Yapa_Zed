import express  from "express";
import { registerUser,userLogin } from "../controllers/AuthController";

const router = express.Router();

router.post("/register-user",registerUser);
router.post("/login-user",userLogin);


export default router;