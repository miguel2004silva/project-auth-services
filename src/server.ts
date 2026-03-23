import express, { Request, Response } from "express"; 
import 'dotenv/config'
import route from "./routes/route";
import sequelize from "./config/sequelize";

const app = express();
const port = process.env.PORT || 8080

app.use(express.json())
app.use('/auth',route)

async function bootstrap(){
   try{
    await sequelize.authenticate();
     await sequelize.sync() // Criação das tabelas do banco de dados
    app.listen(port, () => {
        console.log(`API is running in port ${port}`)
    })
   }catch(error){
    console.error(`ERROR starting the API ${error}`)
    process.exit(1)
   }

}

bootstrap();