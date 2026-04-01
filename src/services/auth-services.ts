import { error } from "node:console";
import { CreateDto, LoginDto } from "../DTO/auth-dto";
import { AuthRepository } from "../repository/auth-repository";
import { ArgonServices } from "./argon-services";
import User, { UserResponse } from "../models/user";
import { verify } from "node:crypto";
import { jwtServices } from "./jwt-services";
import { UserRepository } from "../repository/user-repository";

export class AuthService{
    private userRepository = new UserRepository()
    private argonServices = new ArgonServices()
    private jwtServices = new jwtServices()
    public async create(payload: CreateDto): Promise<UserResponse>{
        if(!payload){
            throw new Error("Payload de criação veio vazio")
        }
        try{
        const findUser = await this.userRepository.findByEmail(payload.email)
        if(findUser){
            throw new Error("E-mail já está sendo utilizado")
        }
        const hash = await this.argonServices.hash(payload.password)
        const user = await this.userRepository.create({
            email: payload.email,
            password: hash
        })
        console.error(user)
        return {
            email: payload.email,
            password: hash,
            id: user.id
        }
        } catch(error) {
            console.error(`Error:${error}`)
            throw error
        }
    }

    public async findByEmail(email: string): Promise<UserResponse>{
        try{
            const user = await this.userRepository.findByEmail(email)
            if(!user){
                throw new Error("Verifique seu e-mail")
            } 
            return{
                email: user.email,
                password: user.password,
                id: user.id
            };

        } catch(error) {
            console.error(`Error:${error}`)
            throw error
        }

    }
    public async login(payload: LoginDto){
        try{
            const findUser = await this.findByEmail(payload.email)
            
            const verifyPassword = await this.argonServices.verify(findUser.password, payload.password)
            if(!verifyPassword){
                throw new Error(`Senha incorreta`)
            }
            const jwt = await this.jwtServices.generateToken({
                email: findUser.email,
                id: findUser.id,
            })
            return jwt;
        } catch(error) {
            console.error(`Error:${error}`)
            throw error
        }
    }
}