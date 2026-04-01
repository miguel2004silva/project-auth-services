import express, { Request, Response, Router } from "express"; 
import 'dotenv/config'
import { AuthController } from "../controllers/controller-auth";
import { UserController } from "../controllers/controller-user";


const authController = new AuthController();
const userController = new UserController();

const route : Router = Router();

route.post("/register", authController.register.bind(authController));
route.get("/health", authController.health.bind(authController));
route.post("/login", authController.login.bind(authController));
route.get("/users", userController.findAll.bind(userController));
route.delete("/delete", userController.deleted.bind(userController));

export default route;