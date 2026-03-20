import express, { Request, Response, Router } from "express"; 
import 'dotenv/config'
import { AuthController } from "../controllers/controller-auth";

const authController = new AuthController();

const route : Router = Router();

route.post("/register", authController.register.bind(authController));
route.get("/health", authController.health.bind(authController));

export default route;