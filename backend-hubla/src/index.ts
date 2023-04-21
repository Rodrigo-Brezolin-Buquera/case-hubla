import express, { Request, Response } from "express";
import cors from "cors";
import Controller from "./controller";
import multer from 'multer';

const app = express();

app.use(cors());
app.use(express.json());
const upload = multer({ dest: 'uploads/' });


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

app.post("/insert",upload.single('file'), controller.insertData);
