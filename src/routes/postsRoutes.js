import express from "express";
import { listPost, postarNovoPost } from "../controllers/postController";

const routes = (app) => {
  app.use(express.json()); // convertendo todos os textos em json

  app.get("/posts", listPost);
  app.post("/posts ", postarNovoPost);
};

export default routes;
