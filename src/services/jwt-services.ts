import jwt, { SignOptions } from "jsonwebtoken";
import { jwtDTO } from "../DTO/jwt-dto";
import 'dotenv/config'


export class jwtServices {
    public generateToken(payload: jwtDTO) {
        const secret = process.env.JWT_SECRET || "mysecret"
        return jwt.sign({
            sub: payload.id,
            email: payload.email,
        },secret, {
            expiresIn: "1h"
        })
    }

}