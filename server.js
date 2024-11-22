import express from "express";

const posts = [
  {
    descricao: "Foto texte",
    imagem: "https://placecats.com/300/150",
  },
  {
    descricao: "Gato fofo dormindo",
    imagem: "https://placecats.com/300/150",
  },
  {
    descricao: "Paisagem montanhosa",
    imagem: "https://placecats.com/300/150",
  },
  {
    descricao: "Cachorro brincando",
    imagem: "https://placecats.com/300/150",
  },
  {
    descricao: "Comida deliciosa",
    imagem: "https://placecats.com/300/150",
  },
];

const app = express();

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
  res.status(200).send("Imersão Alura...");
});
