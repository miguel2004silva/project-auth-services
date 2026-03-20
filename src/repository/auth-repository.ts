import { CreateDto } from "../DTO/auth-dto";
import { User } from "../models/user";

export class AuthRepository{
    public async create(payload: CreateDto){
        return await User.create({
            ...payload
        })
    }
    public async findByEmail(email: string){
        return await User.findOne({
            where: {
                email: email
            }
        })
    }
}