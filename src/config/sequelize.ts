import { Options, Sequelize } from "sequelize";
import "dotenv/config"

const requiredEnvs = ["DB_NAME" , "DB_USER", "DB_PASSWORD","DB_HOST"]

requiredEnvs.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`[Database Config] Variável de ambiente obrigatória ausente: ${envVar}`);
  }
});

const dbOptions:Options = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}

const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
    dbOptions,
)

export default sequelize