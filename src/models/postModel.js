import conectarAoBanco from "../configs/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getAll() {
  const db = conexao.db("imersao_back-end_alura");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}
