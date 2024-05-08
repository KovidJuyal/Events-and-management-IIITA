import express from "express";
import { signUp, signIn} from "../controllers/auth.js";
const router = express.Router();

router.post("/user/register",signUp);
router.post("/user/login",signIn);

export default router;