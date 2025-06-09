import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { login } from "../json/config.json";

export const Errors = {
    ERR_MISSING_PARAMS: {
        code: 'ERR_MISSING_PARAMS',
        message: 'One or more required parameters are missing',
    },
    ERR_INVALID_CREDENTIALS: {
        code: 'ERR_INVALID_CREDENTIALS',
        message: 'Invalid credentials'
    }
}

export default async function (req: Request, res: Response) {
    try {
        if (!req.body || !req.body.username || !req.body.password) {
            res.status(401).send({
                isValid: false,
                error: Errors.ERR_MISSING_PARAMS
            });
            return;
        }

        const {
            username,
            password
        } = req.body;

        // Compare the hash
        const bcryptResult = await bcrypt.compare(password, login.passwordHash);

        if (username !== login.username || !bcryptResult) {
            res.status(401).send({
                isValid: false,
                error: Errors.ERR_INVALID_CREDENTIALS
            });
            return;
        }

        res.status(200).send({ isValid: true });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Unknown error." });
        return;
    }
}