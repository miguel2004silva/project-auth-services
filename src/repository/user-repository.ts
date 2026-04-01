import { CreateDto } from "../DTO/auth-dto"
import User from "../models/user"

export class UserRepository{
     public async create(payload: CreateDto){
        return await User.create({
            ...payload
        })
    }
    public async findByEmail(email: string): Promise<User | null>{
        return await User.findOne({
            where: {
                email: email
            }
        })
    }

    public async findAll(): Promise<User[]> {
    return await User.findAll();
  }

    public async deleted(id: string) {
  return await User.destroy({
    where: { id }
  });
}
}