import express, { Request, Response } from "express";
import cors from "cors";
import Controller from "./controller";
import multer from 'multer';
import Business from "./business";
import Database from "./data";

const app = express();

app.use(cors());
app.use(express.json());
const upload = multer({ dest: 'uploads/' });


app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

const database = new Database()
const business = new Business(database)
const controller = new Controller(business)


app.get("/seller/:id",  (req, res) =>  controller.findSeller(req, res));
app.get("/transactions",  (req, res) =>  controller.findAllTransactions(req, res));

app.post("/transactions",upload.single('file'), (req, res) =>  controller.insertData(req, res));
