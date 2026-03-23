import { DataTypes, Model } from "sequelize";
import  sequelize from "../config/sequelize";

class User extends Model{
  public password!: string;   
  public id!: string;
  public email!: string;
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},{
  sequelize,timestamps : true
})

export default User;

export interface UserResponse{
    email: string;
    password: string;
    id: string;
}