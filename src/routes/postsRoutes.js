import express from "express";
import { listPost } from "../controllers/postController";

const routes = (app) => {
  app.use(express.json()); // convertendo todos os textos em json

  app.get("/posts", listPost);
};

export default routes;
