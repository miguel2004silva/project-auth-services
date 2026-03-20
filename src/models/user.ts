import { DataTypes } from "sequelize";
import  sequelize from "../config/sequelize";

export const User = sequelize.define("User", {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

export interface UserResponse {
  email: string,
  password: string
}