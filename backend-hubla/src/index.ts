import express from "express";
import cors from "cors";
import Controller from "./controller";
import multer from 'multer';
import Business from "./business";
import Database from "./data";
import { HashManager } from "./services/HashManager";
import { Authenticator } from "./services/Authenticator";

const app = express();

app.use(cors());
app.use(express.json());
const upload = multer({ dest: 'uploads/' });


app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

const database = new Database()
const business = new Business(database, new HashManager(), new Authenticator() )
const controller = new Controller(business)

app.get("/sellers",  (req, res) =>  controller.findAllSellers(req, res));
app.get("/sellers/:id",  (req, res) =>  controller.findSeller(req, res));
app.get("/transactions",  (req, res) =>  controller.findAllTransactions(req, res));

app.post("/transactions",upload.single('file'), (req, res) =>  controller.insertData(req, res));
app.post("/login", (req, res) =>  controller.login(req, res));

