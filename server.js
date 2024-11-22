import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Gato deitado na cama",
    imagem: "https://placecats.com/300/150",
  },
  {
    id: 2,
    descricao: "Gato fofo dormindo",
    imagem: "https://placecats.com/300/150",
  },
  {
    id: 3,
    descricao: "Gato mal humorado",
    imagem: "https://placecats.com/300/150",
  },
];

const app = express();
app.use(express.json()); // convertendo todos os textos em json

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function findById(id) {
  return posts.findIndex((posts) => {
    return posts.id == Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = findById(req.params.id);
  res.status(200).json(posts[index]);
});
