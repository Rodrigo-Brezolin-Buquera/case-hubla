import express, { Request, Response } from "express";
import cors from "cors";
import Controller from "./controller";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

const controller = new Controller()



app.get("/ping", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ message: "Pong!" });
  } catch (error) {
    res.send("Erro inesperado");
  }
});
