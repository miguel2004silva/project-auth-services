import * as argon2 from "argon2"

export class ArgonServices{

    public async hash(password: string): Promise<string>{
        try{
            return await argon2.hash(password, {
                type: argon2.argon2id
            })
        } catch(error){
            throw new Error("Erro ao gerar hash da senha")
        }

    } 
    public async verify(hash: string, password: string): Promise<boolean>{
        try{
            return await argon2.verify(hash, password)

        } catch(error){
            throw new Error("Erro ao verificar a senha")
        }
    }

}