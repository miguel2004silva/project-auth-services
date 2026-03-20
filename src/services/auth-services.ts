import { error } from "node:console";
import { CreateDto } from "../DTO/auth-dto";
import { AuthRepository } from "../repository/auth-repository";
import { ArgonServices } from "./argon-services";
import { UserResponse } from "../models/user";

export class AuthService{
    private authRepository = new AuthRepository()
    private argonServices = new ArgonServices()
    public async create(payload: CreateDto): Promise<UserResponse>{
        if(!payload){
            throw new Error("Payload de criação veio vazio")
        }
        try{
        const findUser = await this.authRepository.findByEmail(payload.email)
        if(findUser){
            throw new Error("E-mail já está sendo utilizado")
        }
        const hash = await this.argonServices.hash(payload.password)
        const user = await this.authRepository.create({
            email: payload.email,
            password: hash
        })
        console.error(user)
        return {
            email: payload.email,
            password: hash
        }
        } catch(error) {
            console.error(`Error:${error}`)
            throw error
        }
    }
}