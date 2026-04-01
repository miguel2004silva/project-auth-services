import { UserRepository } from "../repository/user-repository"


export class UserService{

    private userRepository = new UserRepository()
    
    public async findAll() {
    return this.userRepository.findAll();
  }

  public async deleted(id: string) {
  return this.userRepository.deleted(id)
}



}