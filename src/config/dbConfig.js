import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";

let mongoClient = null;

export default async function conectarAoBanco(stringConexao) {
  if (mongoClient) {
    console.log("Conexão já existente. Reutilizando...");
    return mongoClient;
  }

  if (!stringConexao) {
    throw new Error("A string de conexão não foi fornecida!");
  }

  try {
    mongoClient = new MongoClient(stringConexao);
    console.log("Conectando ao cluster do banco de dados...");
    await mongoClient.connect();
    console.log("Conectado ao MongoDB Atlas com sucesso!");

    return mongoClient;
  } catch (erro) {
    console.error("Falha na conexão com o banco!", erro);
    process.exit(1);
  }
}
