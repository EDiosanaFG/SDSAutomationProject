import { Request, Response } from "express";

export default function (req: Request, res: Response) {
    try {
        let verificationResult: boolean = false;


        res.status(200).send({ isValid: verificationResult });
    } catch (error) {
        res.status(500).send({ error: error });
    }
}