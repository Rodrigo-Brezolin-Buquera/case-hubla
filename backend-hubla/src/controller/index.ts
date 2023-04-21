import { Request, Response } from "express"
import Business from "../business"

const business = new Business()

class Controller {

    public async method(req: Request, res: Response): Promise<void> {
        try {
          

            res.status(200).send({ data: "" })
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    public async insertData(req: Request, res: Response): Promise<void> {
        try {
            const file = req.file as Express.Multer.File
            const result = await business.insertData(file)
            res.status(200).send({ data: result })
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }




}

export default Controller