import { UserService } from "../services/user-services";
import { Request, Response } from "express";


export class UserController{
    userService = new UserService();


    public async findAll(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll();
      res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({error: "Não possui usuários no sistema"})
    }
  }

  public async deleted(req: Request, res: Response){
    const { id } = req.body
    try{
        const delet = await this.userService.deleted(id);
        res.status(200).json({
            message: "Usuário deletado com sucesso!"
        })
    } catch (error) {
        return res.status(400).json({error: "Usuário não encontrado"})
    }
  }

}