import { Request, Response } from "express"
import Business from "../business"

class Controller {
    constructor(
        private business: Business
    ) {}

    public async insertData(req: Request, res: Response): Promise<void> {
        try {
            const file = req.file as Express.Multer.File
            const result = await this.business.insertData(file)
            res.status(200).send({message: "Successful insertion", data: result })
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    public async findAllTransactions(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.business.findAllTransactions()
            res.status(200).send({ data: result })
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    public async findSeller(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id 
            const result = await this.business.findSeller(id)
            res.status(200).send({ data: result })
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    public async findAllSellers(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.business.findAllSellers()
            res.status(200).send({ data: result })
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

}

export default Controller