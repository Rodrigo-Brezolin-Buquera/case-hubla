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




}

export default Controller