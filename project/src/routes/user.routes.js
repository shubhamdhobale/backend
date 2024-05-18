import { Router } from "express";
import { RegisterUser } from "../controllers/user.controller";

const router = Router()

router.route("/register").post(RegisterUser)

export default router;