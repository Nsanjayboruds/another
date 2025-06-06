import express from "express"
import { genCurrentUser, updateAssistant } from "../controllers/user.controller.js"
import isAuth from "../middleware/isAuth.js"
import upload from "../middleware/multer.js"

const userRouter=express.Router()

userRouter.get("/current",isAuth, genCurrentUser)
userRouter.post("/update",isAuth,upload.single("assistantImage"),updateAssistant);
export default userRouter