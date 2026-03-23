import { Request, Response } from "express"
import { AuthService } from "../services/auth-services";


export class AuthController{
    private authService = new AuthService()
    public async health(req:Request, res:Response): Promise<Response> { // olhar dps 
        try {
            return res.status(200).json({
                message: "API is Running"
            }); 
        } catch (error) { 
            return res.status(500).json({
                message: "API is Bad"
            });
}
    }

    public async register(req:Request, res:Response): Promise<Response>{
        const { email, password } = req.body
        try{    
            const createUser = await this.authService.create({
                email,
                password
            })
            return res.status(201).json(createUser)
        } catch (error){
            console.error(error)
            return res.status(400).json({error: "Erro ao registrar o usuário"})
        }
    }
    public async login(req:Request, res:Response){
        const { email, password } = req.body
        try{
            const jwt = await this.authService.login({
                email,
                password
            })
            return res.status(200).json({
                "access_token": jwt
            })
        } catch(error){
            console.error(error)
            return res.status(400).json({error: "Erro ao fazer login"})
        }
    }

}